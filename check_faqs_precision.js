const fs = require('fs');
const content = fs.readFileSync('TourDetailPage.tsx', 'utf8');

const regex = /if \(slug === '([^']+)'\) \{[\s\S]*?return \[([\s\S]*?)\];/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const slug = match[1];
    if (slug !== 'taj-mahal-royal-private-tour' && slug !== 'taj-mahal-photography-tour') continue;
    
    const faqsRaw = match[2];
    const faqRegex = /\{[\s\S]*?question: "([\s\S]*?)",[\s\S]*?answer: (?:`([\s\S]*?)`|"([\s\S]*?)")[\s\S]*?\}/g;
    let faqMatch;
    let count = 0;
    while ((faqMatch = faqRegex.exec(faqsRaw)) !== null) {
        count++;
        const answer = faqMatch[2] || faqMatch[3];
        const words = answer.split(/\s+/).filter(w => w.length > 0).length;
        if (words < 80 || words > 120) {
            console.log(`[${slug}] Q${count}: ${words} words (OUTSIDE 80-120)`);
            console.log(`Q: ${faqMatch[1]}`);
        }
    }
}

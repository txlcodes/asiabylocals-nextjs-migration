const fs = require('fs');
const content = fs.readFileSync('TourDetailPage.tsx', 'utf8');

const getTourSpecificFAQsMatch = content.match(/export const getTourSpecificFAQs = [\s\S]*?return null;\s*};/);
if (!getTourSpecificFAQsMatch) {
    console.log("Could not find getTourSpecificFAQs function");
    process.exit(1);
}

const funcContent = getTourSpecificFAQsMatch[0];

const extractFAQs = (slug) => {
    const slugRegex = new RegExp(`if \\(slug === '${slug}'\\) {[\\s\\S]*?return \\[([\\s\\S]*?)\\];`, 'g');
    const match = slugRegex.exec(funcContent);
    if (!match) return [];
    
    const faqsRaw = match[1];
    const faqs = [];
    const faqRegex = /{[\s\S]*?question: "([\s\S]*?)",[\s\S]*?answer: (?:`([\s\S]*?)`|"([\s\S]*?)")[\s\S]*?}/g;
    let faqMatch;
    while ((faqMatch = faqRegex.exec(faqsRaw)) !== null) {
        faqs.push({
            question: faqMatch[1],
            answer: faqMatch[2] || faqMatch[3]
        });
    }
    return faqs;
};

const photographyFAQs = extractFAQs('taj-mahal-photography-tour');
const royalFAQs = extractFAQs('taj-mahal-royal-private-tour');

console.log("--- Photography Tour FAQs ---");
photographyFAQs.forEach((f, i) => {
    const words = f.answer.split(/\s+/).filter(w => w.length > 0).length;
    console.log(`${i+1}. ${words} words: ${f.question}`);
});

console.log("\n--- Royal Private Tour FAQs ---");
royalFAQs.forEach((f, i) => {
    const words = f.answer.split(/\s+/).filter(w => w.length > 0).length;
    console.log(`${i+1}. ${words} words: ${f.question}`);
});

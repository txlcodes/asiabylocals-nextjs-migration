const fs = require('fs');
const content = fs.readFileSync('TourDetailPage.tsx', 'utf8');

const lines = content.split('\n');
let inTargetSlug = false;
let currentSlug = '';

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes("if (slug === 'taj-mahal-royal-private-tour')") || 
        line.includes("if (slug === 'taj-mahal-photography-tour')")) {
        inTargetSlug = true;
        currentSlug = line.match(/'([^']+)'/)[1];
    }
    
    if (inTargetSlug && line.includes("answer:")) {
        let answer = "";
        if (line.includes("`")) {
            answer = line.split("`")[1];
            if (!line.endsWith("`") && !lines[i].includes("`,") && !lines[i].trim().endsWith("`")) {
               // multi-line
               let j = i + 1;
               while (j < lines.length && !lines[j].includes("`")) {
                   answer += " " + lines[j].trim();
                   j++;
               }
            }
        } else if (line.includes('"')) {
             const parts = line.split('"');
             answer = parts[parts.length - 2];
        }
        
        if (answer) {
            const words = answer.split(/\s+/).filter(w => w.length > 0).length;
            if (words < 80 || words > 120) {
                console.log(`[${currentSlug}] Line ${i+1}: ${words} words`);
            }
        }
    }
    
    if (inTargetSlug && line.trim() === "];") {
        inTargetSlug = false;
    }
    
    if (line.includes("if (slug === '") && !line.includes(currentSlug)) {
        inTargetSlug = false;
    }
}

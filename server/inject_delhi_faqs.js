import fs from 'fs';

const tsxFile = '../TourDetailPage.tsx';
let content = fs.readFileSync(tsxFile, 'utf8');

const data = JSON.parse(fs.readFileSync('./temp_delhi_faqs.json', 'utf8'));

let codeToInsert = '\n  // --- DELHI TOUR FAQS ---\n';
for (const item of data) {
    codeToInsert += `  if (slug === '${item.slug}') {\n    return [\n`;
    const qas = item.faqs.map(faq => {
        return `      {\n        question: ${JSON.stringify(faq.question)},\n        answer: ${JSON.stringify(faq.answer)}\n      }`;
    });
    codeToInsert += qas.join(',\n');
    codeToInsert += `\n    ];\n  }\n`;
}
codeToInsert += '  // --- END DELHI TOUR FAQS ---\n';

const marker = '  // --- END AUTO-INJECTED FAQS ---\n';
const idx = content.indexOf(marker);

if (idx !== -1) {
    const newContent = content.slice(0, idx + marker.length) + codeToInsert + content.slice(idx + marker.length);
    fs.writeFileSync(tsxFile, newContent, 'utf8');
    console.log('Successfully injected Delhi FAQs');
} else {
    console.log('Could not find insert point');
}

import fs from 'fs';

const tsxFile = '../TourDetailPage.tsx';
let content = fs.readFileSync(tsxFile, 'utf8');

const faqs = [];
for (let i = 1; i <= 6; i++) {
    const file = `./temp_faqs_${i}.json`;
    if (fs.existsSync(file)) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        faqs.push(...data);
    }
}

let codeToInsert = '\n  // --- AUTO-INJECTED FAQS ---\n';
for (const item of faqs) {
    codeToInsert += `  if (slug === '${item.slug}') {\n    return [\n`;
    const questionsAndAnswers = item.faqs.map(faq => {
        return `      {\n        question: ${JSON.stringify(faq.question)},\n        answer: ${JSON.stringify(faq.answer)}\n      }`;
    });
    codeToInsert += questionsAndAnswers.join(',\n');
    codeToInsert += `\n    ];\n  }\n`;
}
codeToInsert += '  // --- END AUTO-INJECTED FAQS ---\n';

const insertTarget = '  const t = title.toLowerCase();\n';
const insertIndex = content.indexOf(insertTarget);

if (insertIndex !== -1) {
    const newContent = content.slice(0, insertIndex + insertTarget.length) + codeToInsert + content.slice(insertIndex + insertTarget.length);
    fs.writeFileSync(tsxFile, newContent, 'utf8');
    console.log('Successfully injected FAQs into TourDetailPage.tsx');
} else {
    console.log('Could not find insert point.');
}

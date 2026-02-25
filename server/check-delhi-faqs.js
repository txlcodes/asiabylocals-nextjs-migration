import fs from 'fs';

const content = fs.readFileSync('../TourDetailPage.tsx', 'utf8');
const startIdx = content.indexOf('export const getTourSpecificFAQs');
const endIdx = content.indexOf('const TourDetailPage: React.FC', startIdx);
let faqContent = content.substring(startIdx, endIdx);
faqContent = faqContent.replace(/\(title: string, slug: string \| undefined\)/, '(title, slug)');

const tempFile = faqContent + `
const slugs = [
  "india-gate-guided-tour",
  "golden-triangle-3-day-tour",
  "private-taj-mahal-tour-from-delhi",
  "agra-overnight-tour",
  "taj-mahal-tour-by-train-gatimaan"
];
slugs.forEach(slug => {
    let faqs = getTourSpecificFAQs("Tour", slug);
    console.log(slug + ': ' + (faqs ? faqs.length : 0));
});
`;

fs.writeFileSync('test-delhi-faqs.js', tempFile);

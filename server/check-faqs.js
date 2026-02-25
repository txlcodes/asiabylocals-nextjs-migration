import fs from 'fs';

const content = fs.readFileSync('../TourDetailPage.tsx', 'utf8');

const startIdx = content.indexOf('export const getTourSpecificFAQs');
const endIdx = content.indexOf('const TourDetailPage: React.FC', startIdx);

let faqContent = content.substring(startIdx, endIdx);

// List of all tours from list-agra-tours.js
const tours = [
    { "id": 139, "title": "Tour Guide For Agra & Taj Mahal Only", "slug": "book-guide-for-taj-mahal" },
    { "id": 141, "title": "Private Half Day Tour of Taj Mahal & Agra Fort", "slug": "agra-half-day-guided-tour" },
    { "id": 142, "title": "Agra Photography Tour Of Taj Mahal With Photographer", "slug": "agra-photography-tour-taj-mahal" },
    { "id": 143, "title": "Agra Heritage Walking Tour", "slug": "heritage-walk-in-agra" },
    { "id": 201, "title": "Agra City Tour - Taj Mahal And Fort Tour", "slug": "taj-mahal-and-agra-guided-tour" },
    { "id": 182, "title": "Private Taj Mahal Tour From Delhi By Car", "slug": "private-taj-mahal-tour-from-delhi" },
    { "id": 196, "title": "Agra Same Day guided Tour with Car", "slug": "agra-same-guided-tour" },
    { "id": 200, "title": "Taj Mahal Sunrise Tour", "slug": "taj-mahal-sunrise-guided-tour" },
    { "id": 198, "title": "Book Tour Guide for Fatehpur Sikri Visit.", "slug": "fatehpur-sikri-guided-tour" },
    { "id": 210, "title": "Agra Friday Special Tour – Fort, Baby Taj & Mehtab Bagh Sunset", "slug": "agra-friday-tour-taj-closed-alternative" },
    { "id": 211, "title": "From Delhi: Sunrise Taj Mahal and Agra Guided Tour by Car with Options", "slug": "sunrise-taj-mahal-and-agra-tour-by-car" },
    { "id": 212, "title": "From Delhi: Agra Overnight Tour (01 Night Experience)", "slug": "agra-overnight-tour" },
    { "id": 204, "title": "Delhi  Agra Same Day Tour By Train (Gatimaan Express)", "slug": "taj-mahal-tour-by-train-gatimaan" },
    { "id": 999, "title": "Other existing", "slug": "taj-mahal-royal-private-tour" },
    { "id": 998, "title": "Other existing", "slug": "taj-mahal-photography-tour" }
];

let tempFile = faqContent + '\n' +
    'const tours = ' + JSON.stringify(tours) + ';\n' +
    'console.log("Tour ID | Slug | FAQ Count");\n' +
    'console.log("------------------------------------------");\n' +
    'tours.forEach(tour => {\n' +
    '    let faqs = getTourSpecificFAQs(tour.title, tour.slug);\n' +
    '    let count = faqs ? faqs.length : 0;\n' +
    '    console.log(tour.id + " | " + tour.slug + " | " + count);\n' +
    '});\n';

tempFile = tempFile.replace(/\(title: string, slug: string \| undefined\)/, '(title, slug)');

fs.writeFileSync('test-faqs.js', tempFile);

import fs from 'fs';

for (let i = 1; i <= 6; i++) {
    const file = `./temp_faqs_${i}.json`;
    if (fs.existsSync(file)) {
        try {
            JSON.parse(fs.readFileSync(file, 'utf8'));
            console.log(`File ${file} is valid.`);
        } catch (e) {
            console.log(`File ${file} is INVALID: ${e.message}`);
            const content = fs.readFileSync(file, 'utf8');
            const lines = content.split('\n');
            const errorLine = parseInt(e.message.match(/line (\d+)/)?.[1] || 0);
            if (errorLine > 0) {
                console.log(`Line ${errorLine}: ${lines[errorLine - 1]}`);
            }
        }
    }
}

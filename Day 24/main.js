// write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. royas.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. royas.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/royas.pdf
// zip/royas.zip zip/Rohan.zip

const fs = require('fs/promises');
const fsn = require('fs');
const path = require('path');

const basepath = '/home/royas_pc/Documents/60DaysOfLearning2024/Day 24';

(async () => {
    try {
        let files = await fs.readdir(basepath);

        for (const item of files) {
            console.log('Running for', item);
            let ext = path.extname(item).slice(1);
            if (ext && !['js', 'json'].includes(ext)) {
                let targetDir = path.join(basepath, ext);

                if (!fsn.existsSync(targetDir)) {
                    await fs.mkdir(targetDir);
                }

                let oldPath = path.join(basepath, item);
                let newPath = path.join(targetDir, item);

                await fs.rename(oldPath, newPath);
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
})();
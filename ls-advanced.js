
const fs = require ('node:fs/promises');
const path = require('node:path');
const pc = require('picocolors');

const folder = process.argv[2] ?? '.';


async function ls (folder) {

    let files;
    try{
        files = await fs.readdir(folder)
    } catch {
        console.error(pc.red(`Error reading directory: ${folder}`));
        process.exit(1);
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file);
        let fileStat;
        try {
            fileStat = await fs.stat(filePath);
        } catch (err) {
            console.error('Error getting file stats:', err);
            process.exit(1);
        }

        const isDirectory = fileStat.isDirectory();
        const fileType = isDirectory ? 'directory' : '-';
        const fileSize = fileStat.size;
        const fileModified = fileStat.mtime.toLocaleString();

        return `${fileType} ${file} ${fileSize.toString()}, modified: ${fileModified}`;
    })

    const filesInfo = await Promise.all(filesPromises);

    filesInfo.forEach(fileInfo => {
        console.log(fileInfo);
    })
}

    ls(folder)
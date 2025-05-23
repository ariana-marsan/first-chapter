
const { readFile } = require('node:fs/promises');

(
    async () => {
console.log('reading first file...');
const text = await readFile('./test.txt', 'utf-8')
    console.log(text)

console.log('reading second file...');
const data = await readFile('./archivo2.txt', 'utf-8') 
console.log(data)
    }
)()
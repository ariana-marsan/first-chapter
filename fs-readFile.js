
const fs = require('node:fs');

console.log('reading first file...');
fs.readFile('./test.txt', 'utf-8', (err, data) => {
    console.log(data)
}
);

console.log('reading second file...');
fs.readFile('./archivo2.txt', 'utf-8', (err, data) => {
    console.log(data)
}
);
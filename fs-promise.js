
const fs = require('node:fs/promises');

console.log('reading first file...');
fs.readFile('./test.txt', 'utf-8')
    .then(text => {
    console.log(text)
}
);

console.log('reading second file...');
fs.readFile('./archivo2.txt', 'utf-8') 
.then(data => {
    console.log(data)
}
);
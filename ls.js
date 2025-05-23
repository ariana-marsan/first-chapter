const fs = require ('node:fs');

fs.readdir('.',(err, files)=>{
    if(err){
        console.error(err);
        return;
    }

    files.forEach (file => {
        console.log(file);
    })
})

// This code uses the fs module to read the contents of the current directory and log each file name to the console.
// as a promise
// const fs = require ('node:fs/promises');
// fs.readdir('.')
//     .then(files => {
//         files.forEach (file => {
//             console.log(file);
//         })
//     })
//     .catch(err => {
    // if (err) {
//         console.error(err);
//         return;
//     }
//     });
// This code uses the fs/promises module to read the contents of the current directory and log each file name to the console.
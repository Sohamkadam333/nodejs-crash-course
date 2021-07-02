const fs = require('fs');
const path = require('path');
const { Z_FIXED } = require('zlib');

// mkdir = make directory/folder
fs.mkdir(path.join(__dirname, '/test'), (err) => {
        if (err) {
                console.log('Something went wrong', err);
                return;
        }
        console.log('Folder Created');
})


// wirtefile
fs.writeFile(path.join(__dirname, '/test', 'testDemo.txt'), 'Hello Nodejs', (err) => {
        if (err) {
                throw err;
        }

        // append file Date
        fs.appendFile(path.join(__dirname, '/test', 'testDemo.txt'), ' Appended Data', (err) => {
                if (err) {
                        throw err;
                }
                console.log('Data Appended');
        })
        console.log('File Created');
})


// read file
fs.readFile(path.join(__dirname, '/test', 'testDemo.txt'), (err, data) => {
        if (err) {
                throw err;
        }

        const content = Buffer.from(data);
        console.log(content.toString());
})

// read file 2 method 
fs.readFile(path.join(__dirname, '/test', 'testDemo.txt'), 'utf-8', (err, data) => {
        if (err) {
                throw err;
        }

        // const content = Buffer.from(data);
        // console.log(content.toString());
        console.log(data);
})
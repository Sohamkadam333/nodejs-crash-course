const http = require('http');
const fs = require('fs');
const path = require('path');




const app = http.createServer((req, res) => {

        res.writeHead(200, {
                'Content-Type': 'text/html'
        })

        // if (req.url === '/') {
        //         fs.readFile(path.join(__dirname, '../html', 'index.html'), 'utf-8', (err, data) => {
        //                 if (err) {
        //                         throw err;
        //                 }
        //                 res.end(data);
        //         })
        // }
        // else if (req.url === '/about') {
        //         fs.readFile(path.join(__dirname, '../html', 'about.html'), 'utf-8', (err, data) => {
        //                 if (err) {
        //                         throw err;
        //                 }
        //                 res.end(data);
        //         })
        // }

        let filePath = path.join(__dirname, '../html', req.url === '/' ? 'index.html' : req.url);

        let contentType = 'text/html';

        let ext = path.extname(filePath);
        if (!ext) {
                filePath += '.html';
        }

        switch (ext) {
                case '.css':
                        contentType = 'text/css';
                        break
                case '.js':
                        contentType = 'text/javascript';
                        break
                default:
                        contentType = 'text/html';
        }

        fs.readFile(filePath, (err, content) => {
                if (err) {
                        fs.readFile(path.join(__dirname, '../html', 'error.html'), (err, data) => {
                                if (err) {
                                        res.writeHead(500)
                                        res.end('Error!!!');
                                }
                                else {
                                        res.writeHead(404, {
                                                'Content-Type': contentType
                                        })
                                        res.end(data)
                                }
                        })
                }
                else {
                        res.writeHead(200, {
                                'Content-Type': contentType
                        })
                        res.end(content);
                }
        })


})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
        console.log(`Listning on port ${PORT}`);
})
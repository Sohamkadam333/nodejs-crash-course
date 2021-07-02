const path = require('path');


// ḍirname 
console.log('directory-name: ', __filename);
console.log('directory-name: ', path.dirname(__filename));

// basename or filename
console.log('file-name or base-name: ', path.win32.basename(__filename));
console.log('file-name or base-name: ', path.win32.basename(__filename, '.js')); //exclude .extension from filename


// extension name
console.log('Ext-name: ', path.win32.extname(__filename));


// parse 
console.log('parse: ', path.win32.parse(__filename));

// join
console.log('join: ', path.win32.join(__filename, 'order', 'app.js'));
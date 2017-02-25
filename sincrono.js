var fs = require('fs');

var contents = fs.readFileSync('./templates/404.html', 'utf-8');

console.log(contents);

console.log('Hola');

contents = fs.readFileSync('./templates/index.html', 'utf-8');

console.log(contents);

console.log('Hola otra vez');

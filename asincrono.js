var fs = require('fs');

fs.readFile('./templates/404.html', 'utf-8', function (err, contents) {
  console.log(contents);
});

console.log('Hola');

fs.readFile('./templates/index.html', 'utf-8', function (err, contents) {
  console.log(contents);
});

console.log('Hola otra vez');

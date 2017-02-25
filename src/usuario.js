const fs = require('fs');

function saludar (urlObj, res) {
  var file = fs.readFileSync('./templates/index.html', { encoding: 'utf-8' });
  file = file.replace('{name}', urlObj.query.name);
  res.write(file);
  res.end();
}

module.exports = {
  saludar: saludar
}

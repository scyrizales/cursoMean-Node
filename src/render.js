const fs = require('fs');
module.exports = function (res, fileName, renderObj) {
  var file = fs.readFileSync(fileName, { encoding: 'utf-8' });
  for (var k in renderObj) {
    file = file.replace('{' + k + '}', renderObj[k]);
  }
  res.write(file);
  res.end();
}

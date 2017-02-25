const fs = require('fs');
module.exports = function (res, fileName, renderObj) {
  fs.readFile(fileName, { encoding: 'utf-8' }, function (err, file) {
    for (var k in renderObj) {
      file = file.replace('{' + k + '}', renderObj[k]);
    }
    res.write(file);
    res.end();
  });
}

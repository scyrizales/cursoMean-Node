const fs = require('fs');
const url = require('url');

function router(req, res) {
  var urlObj = url.parse(req.url, true);
  console.log(urlObj.pathname);
  switch(urlObj.pathname) {
    case '/favicon.ico':
      var file = fs.readFileSync('./templates/favicon.ico');
      res.write(file);
      res.end();
      break;
    default:
      var datosUrl = urlObj.pathname.split("/");
      console.log(datosUrl);
      var controladora = datosUrl[1];
      var metodo = datosUrl[2];
      try {
        controladora = require('./' + controladora);
        controladora[metodo](urlObj, res);
      } catch (ex) {
        console.log(ex);
        var file = fs.readFileSync('./templates/404.html');
        res.write(file);
        res.end();
      }
  }
}

module.exports = {
  route: router
};

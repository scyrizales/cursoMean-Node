const fs = require('fs');
const url = require('url');

function router(req, res) {
  var urlObj = url.parse(req.url, true);
  switch(urlObj.pathname) {
    case '/favicon.ico':
      var file = fs.readFileSync('./templates/favicon.ico');
      res.write(file);
      res.end();
      break;
    case '/calculos/convertirDolaresASoles':
    // usamos clases para poder variar los valores de las variables iniciales
      var calculos = require('./calculos');
      calculos.usdToPen = 4.21;
      calculos.convertirDolaresASoles(urlObj, res);
      console.log(calculos.usdToPen);
      break;
    default:
      var datosUrl = urlObj.pathname.split("/");
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

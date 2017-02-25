const render = require('./render');

var igv = 0.19;
var usdToPen = 3.29;

function convertirANumero(cadena) {
  return parseInt(cadena, 10);
}

function Calculos() {
  this.igv = 0.19;
  this.usdToPen = 3.29;
}

Calculos.prototype.calcularIGV = function (urlObj, res) {
  var renderObj = {
    monto: urlObj.query.monto,
    igv: urlObj.query.monto * this.igv
  }
  render(res, './templates/resultadoIGV.html', renderObj);
};

Calculos.prototype.convertirDolaresASoles = function (urlObj, res) {
  var renderObj = {
    dolares: convertirANumero(urlObj.query.dolares),
    soles: convertirANumero(urlObj.query.dolares) * this.usdToPen
  }
  render(res, './templates/calcularDolaresSoles.html', renderObj);
};

module.exports = new Calculos();

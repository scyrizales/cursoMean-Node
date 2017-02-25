const render = require('./render');

function calcularIGV(urlObj, res) {
  var renderObj = {
    monto: urlObj.query.monto,
    igv: urlObj.query.monto * 0.19
  }
  render(res, './templates/resultadoIGV.html', renderObj);
}

function convertirDolaresASoles(urlObj, res) {
  var renderObj = {
    dolares: urlObj.query.dolares,
    soles: urlObj.query.dolares * 3.29
  }
  render(res, './templates/calcularDolaresSoles.html', renderObj);
}

module.exports = {
  calcularIGV: calcularIGV,
  convertirDolaresASoles: convertirDolaresASoles
}

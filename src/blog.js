const render = require('./render');
const request = require('request');

function Blog() {

}

Blog.prototype.obtener = function (urlObj, res) {
  console.log('https://jsonplaceholder.typicode.com/' + urlObj.query.load);
  request('https://jsonplaceholder.typicode.com/' + urlObj.query.load, function (error, response, body) {
    var arr = JSON.parse(body);
    var obj = {};
    obj.data = arr.filter(function (o, ix) {
      return ix < parseInt(urlObj.query.max, 10);
    }).map(function (o) {
      return '<li>' + o[urlObj.query.propiedad] + '</li>';
    }).join('');
    obj.titulo = urlObj.query.load;
    render(res, './templates/renderData.html', obj)
  });
};

module.exports = new Blog();

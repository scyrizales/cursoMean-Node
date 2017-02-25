var _ = require('lodash');
var rl = require('readline').createInterface(process.stdin, process.stdout);

function pedirObjeto() {
  rl.setPrompt("Ingresa objeto\n");
  rl.prompt();
}
pedirObjeto();

rl.on('line', function (line) {
  if (line === 'exit') {
    rl.close();
  } else {
    var json;
    try {
      json = JSON.parse(line);
      var estaVacio = _.isEmpty(json);
      console.log("el objeto esta " + (estaVacio ? "vacio" : "lleno"));
    } catch (ex) {
      console.log("el json no es valido");
    }
    pedirObjeto();
  }
}).on('close',function () {
  console.log('Bye');
});

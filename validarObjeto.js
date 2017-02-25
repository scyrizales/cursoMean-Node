var _ = require('lodash');
var rl = require('readline').createInterface(process.stdin, process.stdout);

rl.setPrompt("Ingresa objeto\n");
rl.prompt();

rl.on('line', function (line) {
  if (line === 'exit') {
    rl.close();
  } else {
    console.log(_.isEmpty(JSON.parse(line)));
    rl.setPrompt("Ingresa objeto\n");
    rl.prompt();
  }
}).on('close',function () {
  console.log('Bye');
});

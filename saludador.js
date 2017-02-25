var rl = require('readline').createInterface(process.stdin, process.stdout);

rl.setPrompt("Ingresa tu nombre\n");
rl.prompt();

rl.on('line', function (line) {
  console.log('hola ' + line);
  rl.close();
})

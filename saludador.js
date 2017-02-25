var rl = require('readline').createInterface(process.stdin, process.stdout);

rl.setPrompt("Ingresa tu nombre\n");
rl.prompt();

rl.on('line', function (line) {
  if (line === 'exit') {
    rl.close();
  } else {
    console.log('hola ' + line);
    rl.setPrompt("Ingresa tu nombre\n");
    rl.prompt();
  }
}).on('close',function () {
  console.log('Bye');
});

process.on('exit', function () {
  console.log("Me cerraron");
})

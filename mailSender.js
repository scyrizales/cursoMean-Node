var gmailSender = require('gmail-send');

var send = gmailSender({
  user: 'scyrizales@gmail.com',
  pass: 'asdasdasdasd',
  to: 'edex19@gmail.com',
  subject: 'pruba npm gmail send',
  text: 'envio desde node'
})

send();

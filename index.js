const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('/dev/tty.usbserial-A506LPV4');
const parser = new Readline();
port.pipe(parser);

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

parser.on('data', function(data) {
  console.log(`Tagid: ${data}`);
  io.emit("tagid", data);
});

port.write('ROBOT PLEASE RESPOND\n');


http.listen(3000, function () {
  console.log('listening on *:3000');
});
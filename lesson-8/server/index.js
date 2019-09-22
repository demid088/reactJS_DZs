const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const socketIO = require('socket.io');
const http = require('http');

const Message = require('./models/message');

const app = express();
const server = http.Server(app);
const io = socketIO(server);

app.use(cors());

io.on('connection', (socket) =>{
  socket.on('message', async (msg) => {
    let message = new Message(msg);
    message = await message.save();
    socket.broadcast.emit('message', message);
    socket.emit('message', message);
  })
});

// конект к БД test
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

app.get('/messages', (req, res) => {
  //res.send('Hello');
  Message.find().then((messages) => {
    res.json(messages);
  });
});

app.get('/messages/:id', async (req, res) => {
  const message = await Message.findById(req.params.id);
  res.json(message);
});

server.listen(3000, () => {
  console.log('Listening at port 3000');
});
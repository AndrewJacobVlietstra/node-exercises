const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when a client connects
io.on('connection', socket => {
  console.log('New web socket connection...');

  // Emits to connecting client
  socket.emit('message', 'Welcome to ChatCord!');

  // Broadcast to all clients except the user client
  socket.broadcast.emit('message', 'A user has joined the chat');

  // Runs when client disconnects
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat');
  });

  // On receiving chat message, broadcast it to all open connections
  socket.on('chatMessage', (message) => {
    io.emit('message', message);
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
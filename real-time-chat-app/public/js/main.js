const chatForm = document.getElementById('chat-form');
const chatMessageContainer = document.getElementById('chat-messages-container');
const usersContainer = document.getElementById('users');
const roomName = document.getElementById('room-name');
const socket = io();

// Get username and room from URL using qs library
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true
})

// Join chat room
socket.emit('joinRoom', { username, room });

// Get users and room info
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

// Message from server
socket.on('message', message => {
  console.log(message);
  outputMessage(message);

  chatMessageContainer.scrollTo({ left: 0, top: chatMessageContainer.scrollHeight, behavior: "smooth" });
});

// Message submit handler function
chatForm.addEventListener('submit', e => {
  e.preventDefault();

  // Pull input out of form
  const input = e.target.elements.msg;

  // Get message from form input
  const message = input.value;

  // Emitting message to the server
  socket.emit('chatMessage', message);

  // Clear the input, and focus on it
  input.value = '';
  input.focus();
});

// Output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');

  div.innerHTML = `
  <p class="meta">${message.username} <span>${message.time}</span></p>
  <p class="text">
    ${message.text}
  </p>`;

  return chatMessageContainer.appendChild(div);
};

// Add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
};

// Update userlist for that room in the DOM
function outputUsers(users) {
  usersContainer.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
  `;
};
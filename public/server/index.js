const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Serve static files from /client
app.use(express.static(path.join(__dirname, '../client')));

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
});

http.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

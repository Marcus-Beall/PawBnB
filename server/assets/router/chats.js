let router = require('express').Router()
let Chats = require('../models/chat')

class Socket {
  constructor(io) {

    let connectedUsers = {};
    let chats = [];


    io.on("connection", socket => {
      console.log("User Connected");

      socket.emit("CONNECTED", {
        socket: socket.id,
        message: "Successfully Connected",
        currentChats: Object.keys(chats)
      })

      //CONNECT TO CHATS
      socket.on("join", data => {
        if (data.name, data.room) {
          socket.user = data.name;
          socket.join(data.room);
          connectedUsers[data.name] = data.name;
          socket.emit({
            chat: data.room,
            connectedUsers: connectedUsers
          })
        }
      })

      socket.on('leave', data => {
        if (data.socket.user) {
          delete connectedUsers[socket.user]
          io.to(data.chat).emit('left', data.socket.user)
        }
      })

      socket.on('disconnect', data => {
        if (data.socket.user) {
          delete connectedUsers[socket.user]
          io.to(data.chat).emit('left', data.socket.user)
        }
      })

      socket.on('message', data => {
        if (data.message && data.user) {
          io.to(data.chat).emit('newMessage', data)
          // @ts-ignore
          router.post()
        }
      })
    })
  }
}

module.exports = Socket
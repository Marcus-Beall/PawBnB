let router = require('express').Router()
let Chats = require('../models/chat')
let Users = require('../models/user')

class Socket {
  constructor(io) {

    let connectedUsers = {};
    let chats = [];


    io.on("connection", socket => {
      console.log("User Connected");
      socket.emit("CONNECTED", {
        socket: socket.id,
        message: "Successfully Connected",
        chats: socket.user.chats
      })

      //CONNECT TO CHATS
      socket.on("join", data => {
        if (data.id, data.room) {
          socket.user = data.id;
          socket.join(data.room);
          connectedUsers[data.id] = data.id;
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
        if (data.message && data.id) {
          io.to(data.chat).emit('newMessage', data)
          // @ts-ignore
          router.post((req, res, next) => {
            let message = {
              userId: data.id,
              name: data.name,
              message: data.message
            }
            Chats.findById(data.chat)
              .then(chat => {
                chat.messages.push(message)
                chat.save(err => {
                  if (err) {
                    next(err)
                  }
                })
              })
          })
        }
      })
    })
  }
}

module.exports = Socket
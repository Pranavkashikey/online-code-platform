const { Server } = require("socket.io");

let io;

function init(server){

  io = new Server(server, {
    cors: {
      origin: "*"
    }
  });

  io.on("connection", socket => {

    console.log("Client connected");

    socket.on("join-job", jobId => {
      socket.join(jobId);
    });

  });

}

function getIO(){
  return io;
}

module.exports = { init, getIO };
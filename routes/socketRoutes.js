const { handleConnection } = require("../controllers/socketController");

const socketRoutes = (io) => {
  io.on("connection", (socket) => handleConnection(io, socket));
};

module.exports = socketRoutes;

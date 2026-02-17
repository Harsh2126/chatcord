const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
require("dotenv").config();

const setupRedis = require("./middleware/redisConfig");
const socketRoutes = require("./routes/socketRoutes");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Middleware
app.use(express.static(path.join(__dirname, "public")));

// Setup Redis
setupRedis(io);

// Socket routes
socketRoutes(io);

const PORT = process.env.PORT || 3005;

server.listen(PORT, () => console.log(`Server running on port ${PORT} http://localhost:${PORT}`));

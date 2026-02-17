const { createClient } = require("redis");
const { createAdapter } = require("@socket.io/redis-adapter");

const setupRedis = async (io) => {
  try {
    const pubClient = createClient({ url: "redis://127.0.0.1:6379" });
    await pubClient.connect();
    const subClient = pubClient.duplicate();
    io.adapter(createAdapter(pubClient, subClient));
    console.log("Redis connected successfully");
  } catch (err) {
    // Redis not available, running without adapter (single server mode)
  }
};

module.exports = setupRedis;

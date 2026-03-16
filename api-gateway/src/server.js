const express = require("express");
const cors = require("cors");
require("dotenv").config();

const http = require("http");
const socket = require("./socket");

const authRoutes = require("./routes/authRoutes");
const codeRoutes = require("./routes/codeRoutes");
const resultRoutes = require("./routes/resultRoutes");
const connectDB = require("./config/db");
const problemRoutes = require("./routes/problemRoutes");
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/code", codeRoutes);
app.use("/api", resultRoutes);
app.use("/api/problems", problemRoutes);

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

socket.init(server);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
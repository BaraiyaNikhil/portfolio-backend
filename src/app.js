const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://baraiya-nikhil-portfolio.vercel.app",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  })
);
app.use(express.json());

const massageRoutes = require("./routes/massage.routes");
app.use("/api/connect", massageRoutes);

module.exports = app;

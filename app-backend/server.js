const express = require("express");
const mongoose = require("mongoose");

// server
const server = express();
const port = process.env.PORT || 5001;
// middleware

// db config

// API routes
server.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to the Jungle" });
});

server.listen(port, () => {
  console.log(`Succesful Runtime on server: ${port}`);
});

"use strict";
const dotenv = require("dotenv");

const express = require("express");
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});

"use strict";
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");

dotenv.config();

const PORT = process.env.NODE_DOCKER_PORT;
const MONGO_DB = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);

  mongoose
    .connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log(`Connected to Mongo DB`);
    });
});

const Schema = new mongoose.Schema({
  name: String,
});

const Model = mongoose.model("User", Schema);

app.get("/user", async (req, res) => {
  const data = await Model.find({});
  res.send({ data, message: "Successfully fetched", status: "success" });
});

app.post("/user", async (req, res) => {
  const data = await Model.create({ ...req.body });
  res.send({
    data: [data],
    message: "Successfully created",
    status: "success",
  });
});

const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/OnlyTasks";
console.log("MONGODB_URI:" + uri);

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error(e);
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));

module.exports = db;

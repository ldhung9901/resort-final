require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var userRouter = require("./Router");
var cookieParser = require("cookie-parser");
var cors = require('cors');

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const app = express();
const port = 3001;
app.use(cors());
app.use(cookieParser("sdfsdfsdf23"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", userRouter);
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

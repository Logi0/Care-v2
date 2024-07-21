const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT;
const mongo_url = process.env.MONGO_URL;

mongoose.connect(mongo_url).then((response) => {
  console.log("Connected to the database...");
  return response;
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "app/views"));
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.json({ limit: "4mb" }));

//routes
const userRouter = require("./app/routers/user.route");

//api routes
app.use("/users", userRouter);

const views = {
  index: path.join(__dirname, "/app/views/index.ejs"),
  user: path.join(__dirname, "/app/views/user.ejs"),
  createUser: path.join(__dirname, "/app/views/create-user.ejs"),
};

app.get("/", function (req, res) {
  res.render(views.index);
});

app.get("/create-user", (req, res) => {
  res.render(views.createUser);
});

app.listen(port);
console.log(`Server is listening on port ${port}`);

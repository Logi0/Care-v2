const express = require("express");
const urlRoutes = express.Router();

const controller = require("../controllers/user.controller");

urlRoutes.post("/upload", controller.newUser);
urlRoutes.get("/", controller.getAllRequest);

module.exports = urlRoutes;

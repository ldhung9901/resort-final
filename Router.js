var express = require("express");
var userRouter = express.Router();
var controller = require("./PostCreate");
var loginValidate = require("./Authentication");

userRouter.post("/create", controller.postCreate);
userRouter.post("/delete", loginValidate.logincheck_2, controller.postDeleted);
userRouter.post("/login", loginValidate.loginCheck, controller.reIndex);
userRouter.post("/logout", loginValidate.logincheck_2, controller.logout);
module.exports = userRouter;

const express = require("express");
const app = express();
const User = require("./user.model");
module.exports = {loginCheck : async function (req, res, next) {
    // db.read()
    // var user = db.get("users").find({ name: req.body.name });
    var user = await User.find({ user: req.body.user });
    user = user[0];
    var errors = [];
  
    if (user === undefined) {
      errors.push("User doesn't exist.");
      return res.status(501).json({
        error: errors,
        value: req.body.user,
      });
    }
    if (user.password !== req.body.password) {
        errors.push("Wrong password.");
        return res.status(501).json({
            error: errors,
            value: req.body.user,
          });
      }
    if (req.body.user === user.user && req.body.password === user.password) {
      res.cookie("id", user._doc._id, { signed: true });
  
      app.locals.user1 = user;
      res.locals.user1 = app.locals.user1;
  
      return next();
    }
  
   
  
    if (errors !== []) {
      return res.json({
        error: errors,
        value: req.body.user,
      });
    }
  },
  logincheck_2 : async function (req, res, next) {
    var errors = [];
  
    res.locals.user1 = app.locals.user1;
    if (req.signedCookies.id === undefined) {
      return res.json( {
        error: errors,
        value: req.body.user,
      });
    }
    var userMatched = await User.findById(req.signedCookies.id);
    
    console.log(req.signedCookies.id === userMatched.id)
  
    if (
      // req.signedCookies.id === db.get("users").find({ id: req.signedCookies.id }).value().id
  
      req.signedCookies.id === userMatched.id
    ) {
      next();
    }
  }}
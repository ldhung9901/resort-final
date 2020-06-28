const User = require("./user.model");
var ObjectId = require("mongodb").ObjectID;
var express = require("express");
const app = express();

module.exports = {
  reIndex: function (req, res) {
    res.locals.user1 = app.locals.user1;
   res.status(200).json({message:'login success',user: req.body.user})
  },

  postCreate: function (req, res) {
    console.log(app.locals.user1);

    User.create({
      user: req.body.user,
      password: req.body.password,
    })
      .then((value) => {
        res.status(200).json({ user: value });
      })
      .catch((e) => res.status(501).json({ error: e }));
  },
  postDeleted: function (req, res) {
    // db.get("users").remove({ id: req.body.id }).write();
    User.deleteOne({ _id: ObjectId(req.body.id) })
      .then((value) => res.status(200).json({ userDeleted: value }))
      .catch((e) => res.status(501).json({ error: e }));
  },
  login: function (req, res) {
    res.locals.user1 = app.locals.user1;
  },
  logout: function (req, res) {
    res.cookie("id", { expires: Date.now() });
    res.json({message:'logout'})
  },
};

const express = require("express");
const Router = express.Router();
const bcrypt = require("bcrypt");

const { User, Documents } = require("../db/config.js");
const { hash } = require("bcrypt");
const { sign } = require("jsonwebtoken");

Router.post("/signup", async (req, res) => {
  const { username, password, role, firstName, lastName, profilePicture } =
    req.body;
  const user = await User.findOne({ username });

  if (user) {
    res.status(400).json({ msg: "user already exists" });
  } else {
    const hashedPass = await hash(password, 10);

    await User.create({
      username,
      password: hashedPass,
      role,
      firstName,
      lastName,
      profilePicture,
    });
    res.json({ msg: "user created successfully" });
  }
});

Router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    const isUser = await bcrypt.compare(password, user.password);
    if (!isUser) {
      res.status(403).json({ msg: "wrong password" });
    }
    const token = sign({ username }, process.env.JWT_SECRET);
    res.json({ token });
  } else {
    res.status(403).json({ msg: "wrong username" });
  }
});

Router.post("/logout", (req, res) => {});

module.exports = Router;

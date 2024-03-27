const express = require("express");
const Router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authUser = require("../middleware/Auth.js");
const upload = require("../middleware/profilePic.js");
const { User } = require("../db/config.js");


Router.post("/signup", async (req, res) => {  const { username, password, role } = req.body;
  const user = await User.findOne({ username });

  if (user) {
    res.status(400).json({ msg: "user already exists" });
  } else {
    const hashedPass = await bcrypt.hash(password, 10);

    await User.create({
      username,
      password: hashedPass,
      role,
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
      return
    }
    const token = jwt.sign({ username }, process.env.JWT_SECRET);
    res.json({ token });
  } else {
    res.status(403).json({ msg: "wrong username" });
  }
});

Router.post("/uploadPic", authUser, upload.single("file"), async (req, res) => {
  const file = req.file;
  const user = await User.findOneAndUpdate(
    { username: req.username },
    { profilePicture: file.filename },
    {new:true, runValidators:true}
  );
  user
    .save()
    .then((data) => {
      res.json({msg:"uploaded successfully", data });
    })
    .catch((err) => {
      console.log(err);
    });
});

Router.put("/uploadName", authUser, async (req, res) => {
  const { firstName, lastName } = req.body;
  const user = await User.findOneAndUpdate(
    { username: req.username },
    { firstName, lastName },
    {new:true, runValidators:true}
  );
  user
    .save()
    .then(res.json({msg:"updated successfully"}))
    .catch((e) => {
      console.log("operation failed");
    });
});

Router.post("/logout", authUser, (req, res) => {
  res.json({
    msg: "Logout successful",
  });
});

module.exports = Router;

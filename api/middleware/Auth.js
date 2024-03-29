const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config()
const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

const authUser = async (req, res, next) => {
  const auth = req.headers.authorization;
  try {
    const token = auth.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded) {
      req.username = decoded.username;
      console.log("here")
      next();
    } else {
      res.status(403).json({ msg: "user not authenticated" });
    }
  } catch (e) {
    res.json({ msg: "incorrect inputs" });
  }
};

module.exports = authUser
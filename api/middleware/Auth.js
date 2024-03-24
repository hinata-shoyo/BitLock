const express = require("express");
const jwt = require("jsonwebtoken");

const authUser = async (req, res, next) => {
  const auth = req.headers.authorization;
  const token = auth.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    if (decoded) {
      req.username = decoded.username;
      next();
    } else {
      res.status(403).json({ msg: "user not authenticated" });
    }
  } catch (e) {
    res.json({ msg: "incorrect inputs" });
  }
};

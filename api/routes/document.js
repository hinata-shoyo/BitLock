// const express = require("express");
// const authUser = require("../middleware/Auth.js");
// const Router = express.Router();
// const {connectdb} = require("../db/config.js");
// const { Document } = require("../db/config.js");
// const mongoose = require("mongoose");

// Router.get("/", authUser, (req, res) => {});

// Router.post("/upload", authUser, upload.single("file"), async (req, res) => {
//   const file = req.file;

//   if (!file) {
//     res.status(400).json({ msg: "no file uploaded" });
//   }

//   const writeStream = gfs.createWriteStream({ filename: file.originalname });

//   writeStream.write(file.buffer);
//   writeStream.on("close", (file) => {
//     res
//       .status(200)
//       .json({ msg: "file uploaded successfully", fileId: file._id });
//   });
//   writeStream.on("error", (err) => {
//     console.error("error uploading the file");
//   });
//   writeStream.end();
// });

// Router.get("/:id", authUser, (req, res) => {});

// module.exports = Router;

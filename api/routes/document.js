const express = require("express");
const authUser = require("../middleware/Auth.js");
const Router = express.Router();
const {initializeApp} = require("firebase/app")
const {ref, getStorage, getDownloadURL, uploadBytesResumable} = require("firebase/storage")
const firebaseConfig = require("../firebase/cloud.js");
const multer = require("multer");
const { User } = require("../db/config.js");
require("dotenv").config();

const app = initializeApp(firebaseConfig)

const storage = getStorage(app)
const upload = multer({storage:multer.memoryStorage()})

const giveCurrentDateTime = () => {
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + ' ' + time;
  return dateTime;
}

Router.get("/", authUser, (req, res) => {});

Router.put("/upload", authUser, upload.single("file"), async (req, res) => {
  const dateTime = giveCurrentDateTime()
  const storageRef = ref(storage, `files/${req.file.originalname + '   ' + dateTime}`)

  const metadata = {
    contentType: req.file.mimetype
  }

  const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata)
  const downloadUrl = await getDownloadURL(snapshot.ref)
  const userr = await User.findOne({username:req.username})
  const newDocs = [...userr.documents, downloadUrl]
  const user = await User.findOneAndUpdate({username:req.username},{documents:newDocs})
  user.save().then(
    res.json({msg:"successfully uploaded", data : { name: req.file.originalname, type: req.file.mimetype, downloadUrl}})
    ).catch((e) => {
      console.log(e)
    })
});

Router.get("/:id", authUser, (req, res) => {});

module.exports = Router;

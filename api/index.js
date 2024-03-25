const express = require("express");
require("dotenv").config();
const userRouter = require("./routes/user");
const docRouter = require("./routes/document.js");
const { connectdb } = require("./db/config");
const Grid = require("gridfs-stream");

const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRouter);
// app.use("/doc", docRouter);

// let gfs;
// connectdb.once("open", () => {
//   gfs = Grid(connectdb.db, mongoose.mongo);
//   gfs.collection("uploads");
// });


const start = async() =>{
  try {
    const conn =  connectdb()
    if(conn){
      app.listen(process.env.PORT, () => {
        console.log(`server running on port ${process.env.PORT}`)
      })
    }
  } catch (error) {
    console.log("cannot connect to the database")
  }
}

start()
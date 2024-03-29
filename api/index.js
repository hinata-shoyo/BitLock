const express = require("express");
require("dotenv").config();
const userRouter = require("./routes/user");
const docRouter = require("./routes/document.js");
const { connectdb } = require("./db/config");
const cors = require("cors")
const app = express();

app.use(cors());
app.use(express.static(__dirname+'./uploads'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRouter);
app.use("/doc", docRouter);

app.get("/", (req, res) => {
  res.json({msg:"success"})
})

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
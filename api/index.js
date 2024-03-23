const express =  require("express");
const mongoose = require("mongoose");
require("dotenv").config()

const connectdb = require('./db/config')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))





connectdb().then(() => {
try {
    app.listen(processs.env.PORT, () =>{
        console.log(`server running on port ${process.env.PORT}`)
    })
} catch (err) {
    console.log("cant connect to the server")
}
}).catch((err) => {
    console.log("cannot connect to the database")
})
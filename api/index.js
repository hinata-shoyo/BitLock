const express =  require("express");
require("dotenv").config()
const userRouter = require("./routes/user")
const { connectdb } = require('./db/config')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/user", userRouter)



connectdb().then(() => {
try {
    app.listen(process.env.PORT, () =>{
        console.log(`server running on port ${process.env.PORT}`)
    })
} catch (err) {
    console.log("cant connect to the server")
}
}).catch((err) => {
    console.log("cannot connect to the database")
})
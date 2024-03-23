const express = require("express")
const Router = express.Router()


Router.post("/signup", (req, res, next) =>{
  const username = req.headers.username
  const password = req.headers.password
})

Router.post("/login", (req, res, next) =>{

})

Router.post("/logout", (req, res, next) => {

})
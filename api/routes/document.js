const express = require("express");
const authUser = require("../middleware/Auth.js");
const Router = express.Router();

const { Document } = require("../db/config.js")

Router.get("/", authUser, (req, res) => {});

Router.post("/upload", authUser, (req, res) => {});

Router.get("/:id", authUser, (req, res) => {});

Router.get("/", authUser, (req, res) => {});

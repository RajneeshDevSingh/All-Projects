const express = require("express")
const {getPost} = require("../Controllers/Post")


const router = express.Router()
router.get("/", getPost)


module.exports = router


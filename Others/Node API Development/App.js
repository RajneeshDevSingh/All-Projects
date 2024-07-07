const express = require("express")
const morgan = require("morgan")
const postRoutes = require("./Routes/Post")  // Import the router from Routes/Post.js

const app = express()
app.use(morgan("dev"))

app.use("/", postRoutes)  // Use the router

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModels = require("./models/users");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/MERN_crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error:", err));

app.listen(3001, () => {
    console.log("Server running on port 3001");
});

app.post("/CreateUser", (req, res) => {
    console.log("Request Body:", req.body); // Log the request body for debugging


    UserModels.create(req.body)
    .then(user => {
        console.log("User created:", user);
        res.json(user);
    })
    .catch(err => {
        console.error("Error while creating user:", err);
        res.json(err);
    });
});

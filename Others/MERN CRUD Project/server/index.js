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

app.get("/" , (req, res)=>
    {
        UserModels.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
    })




app.get("/UpdateUser/:id" , (req, res)=>
{
    const id = req.params.id;
    UserModels.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put("/UpdateUser/:id" , (req, res)=>
{
    const id = req.params.id;
    UserModels.findOneAndReplace({_id: id}, 
        {
            name:req.body.name,
            email:req.body.email,
            age:req.body.age
        }
    )
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.delete("/deleteUser/:id" , (req, res)=>
{
    const id = req.params.id;
    UserModels.findOneAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

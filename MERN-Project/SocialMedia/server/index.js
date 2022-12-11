import  express  from "express";
import bodyParser from "body-parser";
import mongoose, { Mongoose } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path"
import { fileURLToPath } from "url";


/// 

// configurations//###################################

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use("/assets", express.static(path.join(__dirname , "public/assets")))

///// 12.30min 
// https://www.youtube.com/watch?v=K8YELRmUb5o

// file storage 

const storage = multer.diskStorage({
    destination : function(req , file , cb)
    {
        cb(null , "pubic/assets");
    },
    filename : function(req , file , cb)
    {
        cb(null , file.originalname);
    }

})

const upload = multer({storage})


// Mongoose setup #########################
dotenv.config();

mongoose.set('strictQuery', false);

const PORT = process.env.PORT || 6001;
mongoose.connect('mongodb+srv://RDSDB:sdHX28dxtpi.m7x@cluster0.nuccd08.mongodb.net/?retryWrites=true&w=majority' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));

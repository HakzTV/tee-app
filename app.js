import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import homeRoutes from "./routes/home.js"
const app = express()




// Middleware
dotenv.config()
mongoose.set('strictQuery', true);  
// To allow json to be parsed
app.use(express.json())

// Setting ejs to check in the views section
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(cookieParser()) 



// Route handlers
app.use("/", homeRoutes)
app.use("/about", homeRoutes)



// Configurations for DB
const url = process.env.MONGO_URI
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }



//   DB connection
const connect = ()=>{
    mongoose.connect(url, options).then(()=>{
        console.log("Connected to the DB")
    })
    .catch(err=>{
        throw err
    })
}


const port = process.env.PORT || 3000
// Server opened
app.listen(port, ()=>{
    connect()
    console.log("Connected")
})  
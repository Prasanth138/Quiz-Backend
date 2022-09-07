//importing required Packages;
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/routes');
require("dotenv").config();

const app = express();

//Body parser
app.use(express.json())
//CORS
app.use(cors())


//port
const PORT=process.env.PORT || 5000 ;
//Router
app.use('/',router)


const msg="<div><h1>Welcome to Quiz API</h1>"

app.get('/', function (req, res) {
    res.send(`${msg}`);
  })

//MONGODB URI
const URI= "mongodb+srv://quizapp:quizapp@cluster0.f8qoo.mongodb.net/crud?retryWrites=true&w=majority"

mongoose.connect(URI).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`)
    })
}).catch((error)=>{
    console.log(error);
})
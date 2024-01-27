const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
// jOmUyrCnjzTYkpz6
dotenv.config()

const app = express();
mongoose.connect(process.env.MONGO_URI)
.then(() =>{console.log('success')})
app.listen(3000, ()=>{
    console.log('Server is runnig on port 3000.')
})
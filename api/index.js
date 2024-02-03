const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.route.js');
const authRoutes = require('./routes/auth.route.js');
// const cors = require('cors')
const app = express();
dotenv.config()

mongoose.connect(process.env.MONGO_URI)
.then(() =>{console.log('success')})

// app.use(cors())
app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
});

app.listen(3000, ()=>{
    console.log('Server is runnig on port 3000.')
})
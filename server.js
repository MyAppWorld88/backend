const express = require("express");
const dotenv = require("dotenv").config();


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/v1/users',require('./routes/userRoutes'));
app.use('/api/v1/books',require('./routes/bookRoutes'));
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
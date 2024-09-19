const express = require("express");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorhandler");
const dotenv = require("dotenv").config();

connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/v1/users',require('./routes/userRoutes'));
app.use('/api/v1/books',require('./routes/bookRoutes'));
app.use('/api/v1/authors',require('./routes/authorRoutes'));
app.use('/api/v1/categories',require('./routes/categoriesRoutes'));

app.all('*',(req,res,next)=>{
    const err= new Error(`Can't find ${req.originalUrl} on this server!`);
    err.status ='fail';
    err.statusCode=404;
    next(err)
})
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
const asyncHander = require("express-async-handler");
const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
//@desc Register a User
//@route Post /api/v1/users/register
//@access public
const registerUser = asyncHander(async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password){
       res.status(400);
       throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
      res.status(400);
      throw new Error("User Already Registered"); 
    }
    //hash password
    const hashPassword = await bcrypt.hash(password,10);

    const user = await User.create({
        username,email,password:hashPassword,
    })
    if(user){
        res.status(201).json({_id:user.id,email:user.email});
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }

//   res.json({message:"Register the User"});
});

//@desc login a User
//@route Post /api/v1/users/login
//@access public
const loginUser = asyncHander(async(req,res)=>{
    res.json({message:"Login User"});
  });

module.exports = {registerUser,loginUser}
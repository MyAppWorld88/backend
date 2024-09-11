const asyncHander = require("express-async-handler");
const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Registeredlibrary = require("../models/libraryModel");
const { v4: uuidv4 } = require('uuid'); 

//@desc Register a User as library_admin and register new library.
//@route Post /api/v1/users/register
//@access public
const registerUser = asyncHander(async(req,res)=>{
    const {username,email,mobileNo,password,libraryName,address}=req.body;
    if(!username || !email || !mobileNo|| !password  || !libraryName || !address){
       res.status(400);
       throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
      res.status(400);
      throw new Error("User Already Registered"); 
    }
    //First Register a library and generate library Code
    const prefix = 'MEM'; 
    const uuid = uuidv4().split('-')[0].toUpperCase();  // Extract part of the UUID to keep it short 
    let libCode= `${prefix}-${uuid}`; 

    //save library to generate libraryCode and libraryId
    const library = await Registeredlibrary.create({
        libraryName,libraryCode:libCode,address
    })
    if(library){
        //hash password
        const hashPassword = await bcrypt.hash(password,10);
        //create library_admin
        const user = await User.create({
            username,email,mobileNo,password:hashPassword,roleId:2,libraryId:library.id
        })
        if(user){
            res.status(201).json({_id:user.id,email:user.email});
        }else{
            res.status(400);
            throw new Error("User data is not valid");
        }
    }else{
        res.status(400);
        throw new Error("Invalid Data"); 
    }



//   res.json({message:"Register the User"});
});

//@desc login a User
//@route Post /api/v1/users/login
//@access public
const loginUser = asyncHander(async(req,res)=>{
    const{email,password}=req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id,
            }
        },
        process.env.ACCESS_TOKEN_SECERT,
        {expiresIn:"1m"}
       );
       const library = await Registeredlibrary.findById(user.libraryId);
       res.status(200).json({
        accessToken,
        userInfo:{
                username:user.username,
                email:user.email,
                id:user.id,
                roleId:user.roleId,
                library:library,
            }
     });
    }else{
        res.status(401);
        throw new Error("Invalid Email or Password"); 
    }

  });

module.exports = {registerUser,loginUser}
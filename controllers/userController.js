const asyncHander = require("express-async-handler");
//@desc Register a User
//@route Post /api/v1/users/register
//@access public
const registerUser = asyncHander(async(req,res)=>{
  res.json({message:"Register the User"});
});

//@desc login a User
//@route Post /api/v1/users/login
//@access public
const loginUser = asyncHander(async(req,res)=>{
    res.json({message:"Login User"});
  });

module.exports = {registerUser,loginUser}
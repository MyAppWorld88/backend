const asyncHander = require("express-async-handler");
const jwt = require("jsonwebtoken");


const validateToken = asyncHander(async(req,res)=>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token=authHeader.split(" ")[1];
        jwt.verify(token,process.env.ACCESS_TOKEN_SECERT,(err,decoded)=>{
            if(err){
                res.status(401);
                throw new Error("User is not authorized");
            }
            console.log(decoded);
        })
    }
});

module.exports=validateToken;
const asyncHander = require("express-async-handler");
const Author = require('../models/authorModel');


//@desc add a Author
//@route Post /api/v1/authors/add
//@access public
const addAuthor = asyncHander(async(req,res)=>{
    const {name,bio,birth_year,death_year}=req.body;
    if(!name || !bio || !birth_year){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    try{
        const newAuthor = await Author.create({
            name,
            bio,
            birth_year,
            death_year,
            libraryId:req.userinfo.libraryId
        });
        res.status(201).send(newAuthor)
    }catch(err){
      console.log(err)
      res.status(500).send("Error creating contact");
    }


})

module.exports = {
    addAuthor,
  };
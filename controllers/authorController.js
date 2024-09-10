const asyncHander = require("express-async-handler");
const Author = require('../models/authorModel');


//@desc add a Author
//@route Post /api/v1/authors/add
//@access public
const addAuthor = asyncHander(async(req,res)=>{
    console.log(addAuthor)
    const {name,bio,birth_year,death_year}=req.body;
    if(!name || !bio || !birth_year){
        // console.log(req.body)
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    try{
        console.log(req.body)
        const newAuthor = await Author.create({
            name,
            bio,
            birth_year,
            death_year});
        res.status(201).send(newAuthor)
    }catch(err){
      console.log(err)
      res.status(500).send("Error creating contact");
    }


})

module.exports = {
    addAuthor,
  };
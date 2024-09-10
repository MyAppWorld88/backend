const asyncHander = require("express-async-handler");
const Categories = require('../models/categoriesModel');


//@desc add a categories
//@route Post /api/v1/categories/add
//@access public
const addCategories = asyncHander(async(req,res)=>{
    console.log(req.body)
    const {name,description}=req.body;
    if(!name || !description ){
        // console.log(req.body)
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    try{
        console.log(req.body)
        const newCategory = await Categories.create({
            name,
            description});
        res.status(201).send(newCategory)
    }catch(err){
      console.log(err)
      res.status(500).send("Error creating contact");
    }


})

module.exports = {
    addCategories,
  };
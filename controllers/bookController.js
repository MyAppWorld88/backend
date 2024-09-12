const asyncHander = require("express-async-handler");
const Book = require('../models/bookModel');

//@desc add a book
//@route Get /api/v1/books/add
//@access public
const getBook =asyncHander(async(req,res)=>{
    res.status(200).send("ok tested")
})

//@desc add a book
//@route Post /api/v1/books/add
//@access public
const addBook = asyncHander(async(req,res)=>{
    const {title,category_ids,isbn,publisher_year,publisher_name,copies_available,total_copies,borrowed}=req.body;
    if(!title || !category_ids || !isbn || !publisher_year || !publisher_name || !copies_available || !total_copies || !borrowed ||!authorName){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    try{
        console.log(req.body)
        const newBook = await Book.create({
            title,
            category_ids,
            isbn,
            publisher_year,
            publisher_name,
            copies_available,
            total_copies,
            borrowed,
            authors:[{'authorName':authorName}],
            libraryId:req.userinfo.libraryId,
        });
        res.status(201).send(newBook)
    }catch(err){
      console.log(err)
      res.status(500).send("Error creating contact");
    }


})

module.exports = {
    addBook,getBook
  };
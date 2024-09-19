const asyncHander = require("express-async-handler");
const Book = require('../models/bookModel');

//@desc get a book
//@route Get /api/v1/books/getBook
//@access public
const getBook =asyncHander(async(req,res)=>{
    console.log("userinfo",req.userinfo.roleId)
    console.log("lib",req.userinfo.libraryId)
    let AllBooks;
    if(req.userinfo.roleId=='2'){//admin
        AllBooks =await Book.find({libraryId:req.userinfo.libraryId});
    }else if(req.userinfo.roleId=='3'){//user level
        // AllBooks =await Contact.find({user_id:req.user.id});
    }
    res.status(200).send(AllBooks);
})

//@desc add a book
//@route Post /api/v1/books/add
//@access public
const addBook = asyncHander(async(req,res)=>{
    const {title,category_ids,isbn,publisher_year,publisher_name,copies_available,total_copies,borrowed,authors}=req.body;
    if(!title || !category_ids || !isbn || !publisher_year || !publisher_name || !copies_available || !total_copies ||!authors){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    try{
        const newBook = await Book.create({
            title,
            category_ids,
            isbn,
            publisher_year,
            publisher_name,
            copies_available,
            total_copies,
            borrowed,
            authors,
            libraryId:req.userinfo.libraryId,
        });
        res.status(201).send(newBook)
    }catch(err){
      console.log(err)
      res.status(500).send("Error creating contact");
    }
})

//@desc update a book
//@route Post /api/v1/books/update/id
//@access public

module.exports = {
    addBook,getBook
  };
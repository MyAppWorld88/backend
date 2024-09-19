const asyncHander = require("express-async-handler");
const Book = require('../models/bookModel');

//@desc get a book
//@route Get /api/v1/books/getBook
//@access public
const getBook =asyncHander(async(req,res)=>{
    // console.log("userinfo",req.userinfo.roleId)
    // console.log("lib",req.userinfo.libraryId)
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
//@route Post /api/v1/books/update
//@access public
const updateContact =asyncHander( async  (req,res)=>{
const book = await  Book.findById(req.body.id);
if(!book){
    res.status(404);
    throw new Error("Contact not found");
}
// if(contact.user_id.toString() !==req.user.id){
//     res.status(403);
//     throw new Error("User dont have permission to update other user contacts");
// }
const updatedBook = await Contact.findByIdAndUpdate(req.body.id,req.body,{new:true});
res.status(200).json(updatedBook);
});

//@desc delete a book
//@route Get /api/v1/books/delete
//@access public
const deleteBook =asyncHander(async(req,res)=>{
    // console.log("userinfo",req.userinfo.roleId)
    // console.log("lib",req.userinfo.libraryId)
    book =await Book.findById(req.body.id);
    // console.log(book);
    if(!book){
        res.status(404);
        throw new Error("Contact not found");
    }
   checkStatus= await Book.deleteOne({_id:req.body.id});
   if(checkStatus.deletedCount==1){
    res.status(200).send({'Message':'Deleted Successfully'});
   }else{
    throw new Error("Something is wrong!");
   }
   
})

module.exports = {
    addBook,getBook,updateContact,deleteBook
  };
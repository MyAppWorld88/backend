const express = require("express");
const { addBook,getBook,updateContact,deleteBook } = require("../controllers/bookController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.get("/getBook",validateToken,getBook);
router.post("/add",validateToken,addBook);
router.post("/update",validateToken,updateContact);
router.post("/delete",validateToken,deleteBook);


module.exports=router;


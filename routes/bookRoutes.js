const express = require("express");
const { addBook,getBook } = require("../controllers/bookController");

const router = express.Router();

router.get("/getBook",getBook);
router.post("/add",addBook);
router.post("/update",);
router.post("/delete",);


module.exports=router;


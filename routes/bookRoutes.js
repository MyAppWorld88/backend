const express = require("express");
const { addBook,getBook } = require("../controllers/bookController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.get("/getBook",validateToken,getBook);
router.post("/add",validateToken,addBook);
// router.post("/update",validateToken,updateBook);
router.post("/delete",);


module.exports=router;


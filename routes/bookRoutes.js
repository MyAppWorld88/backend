const express = require("express");
const { addBook } = require("../controllers/bookController");

const router = express.Router();

router.post("/add",addBook);
router.post("/update",);
router.post("/delete",);


module.exports=router;


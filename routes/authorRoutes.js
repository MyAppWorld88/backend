const express = require("express");
const { addAuthor} = require("../controllers/authorController");

const router = express.Router();

router.post("/add",addAuthor);


module.exports=router;
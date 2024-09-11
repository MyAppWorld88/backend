const express = require("express");
const { addAuthor} = require("../controllers/authorController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/add",validateToken,addAuthor);


module.exports=router;
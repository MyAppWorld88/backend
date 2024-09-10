const express = require("express");
const { addCategories} = require("../controllers/categoriesController");

const router = express.Router();

router.post("/add",addCategories);


module.exports=router;
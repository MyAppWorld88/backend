const express = require("express");
const { addCategories} = require("../controllers/categoriesController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/add",validateToken,addCategories);


module.exports=router;
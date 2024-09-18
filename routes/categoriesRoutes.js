const express = require("express");
const { addCategories,getAllCategories, updateCategories, deleteCategory} = require("../controllers/categoriesController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.get("/get",validateToken,getAllCategories);
router.post("/add",validateToken,addCategories);
router.post("/update",validateToken,updateCategories);
router.post("/delete",validateToken,deleteCategory);

module.exports=router;
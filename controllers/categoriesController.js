const asyncHander = require("express-async-handler");
const Categories = require('../models/categoriesModel');

//@desc get All categories
//@route Post /api/v1/categories/get
//@access public
const getAllCategories = asyncHander(async (req, res) => {

    const getAllCategories = await Categories.find({});
    res.status(201).send(getAllCategories);

    console.log(err)
    res.status(500).send("Error creating contact");

})

//@desc add a categories
//@route Post /api/v1/categories/add
//@access public
const addCategories = asyncHander(async (req, res) => {
    console.log(req.body)
    const { name, description } = req.body;
    if (!name || !description) {
        // console.log(req.body)
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    console.log(req.body)
    const newCategory = await Categories.create({
        name,
        description,
        libraryId:req.userinfo.libraryId
    });
    res.status(201).send(newCategory)

})
//@desc update a categories
//@route Post /api/v1/categories/update
//@access public
const updateCategories = asyncHander(async (req, res) => {
    console.log(req.body)
    const category = await Categories.findById(req.body.id)
    if (!category) {
        // console.log(req.body)
        res.status(404);
        throw new Error("Category Not Found");
    }
    if (category.libraryId.toString() !== req.userinfo.libraryId) {
        res.status(403);
        throw new Error("Category Not Found!");
    }

    const updatedCategory = await Categories.findByIdAndUpdate(req.body.id, req.body, { new: true });
    res.status(201).send(updatedCategory)

})

//@desc delete a categories
//@route Post /api/v1/categories/id
//@access public
const deleteCategory = asyncHander(async (req, res) => {
    console.log(req.body)
    // if (!ObjectId.isValid(req.body.id)) {
    //     return res.status(400).send('Invalid ID');
    //   }
    const category = await Categories.findById(req.body.id)
    console.log(category)
    if (!category) {
        // console.log(req.body)
        res.status(404);
        throw new Error("Category Not Found!");
    }

    const deleteCategory = await category.deleteOne({ _id: req.body.id })
    res.status(201).send(deleteCategory)

})

module.exports = {
    addCategories, getAllCategories, updateCategories, deleteCategory
};
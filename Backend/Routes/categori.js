const express = require("express");
const router = express.Router();
const Category = require("../Models/Category.js");

router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;

    const newCategory = new Category({ name, img });
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Tüm kategorileri getirme (Read- All)
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Belirli bir kategoriyi getirme (Read - Single)
router.get("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    try {
      const category = await Category.findById(categoryId);

      res.status(200).json(category);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Category not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

router.put("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const update = req.body;

    const exsitingCategory = await Category.findById(categoryId);

    if (!exsitingCategory) {
      return res.status(404).json({ error: "Category Not Found" });
    }

    const updateCategori = await Category.findByIdAndUpdate(
      categoryId,
      update,
      { new: true }
    );
    res.status(200).json(updateCategori);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

router.delete("/:categoryId", async (req, res) => {
    try {
        const category_Id = req.params.categoryId;
    

        const deleteCategory = await Category.findByIdAndDelete(category_Id);

        if(!deleteCategory){
            return res.status(404).json({error: "category Not Found"});
        }
        res.status(200).json(deleteCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "server error"});
        
    }
});
  
module.exports = router;

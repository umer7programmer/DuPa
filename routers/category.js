const express=require("express");
const category=require("../controllers/category.js");
const router=express.Router();

router.route("/category").get(category);
module.exports=router;
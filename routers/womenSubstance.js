const express=require("express");
const router=express.Router();
const {womenSubstanceData}=require("../controllers/womenSubstance.js");
router.route("/womenSubstance").get(womenSubstanceData);
module.exports=router;
const express=require("express");
const router=express.Router();
const {getData}=require("../controllers/campaigns.js");
router.route("/campaign").get(getData);
module.exports=router;

const express=require("express");
const {sponsorData}=require("../controllers/sposnsor.js");
const router=express.Router();
router.route("/sponsor").get(sponsorData);
module.exports=router;
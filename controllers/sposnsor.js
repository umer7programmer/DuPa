const mongoose=require("mongoose");
const SPONSOR=require("../models/Sponsor.js");
const sponsorData=async(req,resp)=>{

    try {
        const sponsorData= await SPONSOR.find();
     
       resp.send(sponsorData);  
       
    } catch (error) {
        resp.send(error)

        
    }
}
module.exports={sponsorData};
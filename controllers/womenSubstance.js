const mongoose=require("mongoose");
const WOMENSUBSTANCE=require("../models/womenSubstance.js");
const womenSubstanceData=async(req,resp)=>{

    try {
        const womenSubstanceData= await WOMENSUBSTANCE.find();
     
       resp.send(womenSubstanceData);  
       
    } catch (error) {
        resp.send(error)

        
    }
}
module.exports={womenSubstanceData};
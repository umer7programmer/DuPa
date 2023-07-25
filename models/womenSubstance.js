const mongoose=require("mongoose")
const womenSubstanceSchema=new mongoose.Schema({
  
    data:{
      img:{
        type:String
      },
      name:{
        type:String
      },
      para:{
        type:String
      },
    

    },
    featured:{
      type:Boolean
    }
})
module.exports=mongoose.model("WomenSubstance",womenSubstanceSchema);
const mongoose=require("mongoose")
const campaignSchema=new mongoose.Schema({
    heading:{
        type:String
    },
    title:{
        type:String
    },
    para:{
        type:String
    }
    ,data:{
        p1:{
            type:String

        },
        p2:{
            type:String

        },
        p3:{
            type:String

        },
        p4:{
            type:String

        }

    }
})
module.exports=mongoose.model("Campaign",campaignSchema);
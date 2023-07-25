const mongoose=require("mongoose");
const dotenv=require("dotenv");

//config dotenv
dotenv.config();


//connection with database;
const connection=async(req,resp)=>{
    try {
      const connect= await mongoose.connect(process.env.MONGO_URL);
      if(connect){
        
        console.warn("Connection successful");
      }
        
    } catch (error) {
        console.warn(error);
        
    }
};
connection();

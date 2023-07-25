const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
require("./Config.js");
const sponsorRouter=require("./routers/sponsor.js")
const categoryRouter=require("./routers/category.js")
const campaignRouter=require("./routers/campaigns.js");
const womenSubstanceRouter=require("./routers/womenSubstance.js")
const app=express();

app.use(cors());
app.use(express.json());

//config dotenv
dotenv.config();

//routes

app.use("/api1",sponsorRouter);
app.use("/api2",categoryRouter);
app.use("/api3",campaignRouter);
app.use("/api4",womenSubstanceRouter);

// server
app.listen(process.env.PORT,()=>{
    console.warn(`server is running at ${process.env.PORT}`)
})

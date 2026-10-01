const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT || 3000;
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`server is succesfully run at ${PORT}`);
})
const router=require("./routes/blogs");
 app.use("/api/v1",router);
const dbConnect=require("./config/database");
dbConnect();

app.get("/",(req,res)=>{
    res.send(`<h1>This is homepage</h1>`);
})
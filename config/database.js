
const mongoose=require("mongoose");
require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("DATABASE connect succesfully");
    })
    .catch((err)=>{
        console.log("invalid connection");
        console.log(err.message);
      process.exit(1);
    })
}
module.exports=dbConnect;
const mongoose = require("mongoose");
require("dotenv").config();

//mongoose.connect("mongodb:127.0.0.1:27017/server5pm")
//.then(()=>{
//    console.log("database is connected!!!")
//})
//.catch(error=>{
//    console.log("error")
//})

async function getConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Data Base is connected!!!");
  } catch (error) {
    console.log(error);
  }
}
getConnect();

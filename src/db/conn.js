const mongoose=require("mongoose")

//ye promise return krta h
mongoose.connect("mongodb://localhost:27017/students-api").then(()=>{
    console.log("connection is successfull!");     
}).catch((e)=>{
    console.log("No connection!");
})
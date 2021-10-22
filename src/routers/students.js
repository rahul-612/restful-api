const express=require("express");
const router=new express.Router();
const Student=require('../models/student');

//registering new user or create a new student

//1.Using promise
// app.post("/students",(req,res)=>{
//     console.log(req.body)
//     const user=new Student(req.body);          //inserting document into collection
//     user.save()                                 //saving into database
//     .then(()=>{res.status(201).send(user)})
//     .catch((e)=>{res.status(400).send(e)})    
// })


//2.Using async await
router.post("/students",async (req,res)=>{
    try{
        const user=new Student(req.body);          //inserting document into collection     
        const createUser=await user.save();         //saving into database
        res.status(201).send(createUser);               
    }
    catch(e){
        res.status(400).send(e)
    }
})


//read the data of registered students
router.get("/students",async (req,res)=>{
    try{
        const studentsData=await Student.find();
        res.send(studentsData);
    }
    catch(e){
        res.send(e);
    }
})

//get the individual data
router.get("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;    
        const studentData = await Student.findById(_id);
        
        if(!studentData)
            return res.status(404).send();
        else
            res.send(studentData);
    }
    catch(e){
        res.status(500).send(e);    //500:internal server error
    }
})

//update student's data by its id
router.patch("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updateStudents= await Student.findByIdAndUpdate(_id,req.body,{
            new:true //isse jo update hua h wo data display hoga
        });
        
        res.send(updateStudents);
    }
    catch(e){
        res.status(404).send(e);
    }
})

//delete student's data by id
router.delete("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const delStudent=await Student.findByIdAndDelete(_id);
        if(!_id)
        return res.sendStatus(400).send();
        else
        res.send(delStudent);
    }
    catch(e){
        res.status(500).send(e);
    }
})

module.exports=router;
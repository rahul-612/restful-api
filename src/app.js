const express = require('express');
require("./db/conn");

const app = express();
const port = process.env.PORT || 8000;
const studentRouter=require("./routers/students");

/* We don't need express.json() & express.urlencoded() for GET Requests or DELETE Requests.
We only need it for post and put req. */

/* express.json() is a method inbuilt in express to recognize the incoming requeobject as a JSON object.
This method is called as a middleware in our application using the code:app.use(express.json()); */ 

app.use(express.json());        //converting the data(getting from rest api) into json

//we need to register our router
app.use(studentRouter)


app.listen(port,()=>{
    console.log(`connection established at port ${port}`);
})
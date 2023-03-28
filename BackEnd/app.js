const express=require("express");
const mongoose=require("mongoose");
const ProductRoute = require("./Routes/ProductRoute");
const CategoryRoute = require("./Routes/CategoryRoute");
var cors = require('cors');


require("dotenv").config();
server=express();
let port=process.env.PORT||8080;

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL)
        .then(()=>{
            console.log("DB Connected")
            server.listen(port,()=>{
                console.log("server is listening on Port:" +port)
            })
        })
        .catch(error=>{
            console.log("DB Error "+error)
        })
server.use(cors());
server.use(express.json())
server.use(ProductRoute);
server.use(CategoryRoute);
server.use((request,response,next)=>{
    response.status(404).json({message:"Page Not Found"})
})
server.use((error,request,response,next)=>{
    let errorStatus= error.status|| 500
    response.status(errorStatus).json({message: error+" "})
})
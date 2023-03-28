const mongoose=require("mongoose");

const CategorySchema=new mongoose.Schema({
        _id:Number,
        name:{type:String,requires:true},

})

mongoose.model("Category",CategorySchema)
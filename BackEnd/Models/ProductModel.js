const mongoose=require("mongoose");

const ProductSchema=new mongoose.Schema({
        _id:Number,
        title:{type:String,requires:true},
        image:String,
        description:String,
        details: String,
        price:Number,
        rate:Number,
        quantity:Number,
        colors:[type=String],
        category:Number
})

mongoose.model("Product",ProductSchema)
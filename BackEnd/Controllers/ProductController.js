const mongoose=require("mongoose");
require("./../Models/ProductModel");
const ProductSchema=mongoose.model("Product");

module.exports.getAllProducts=(request,response,next)=>{
    ProductSchema.find({})
                    .then(data=>{
                        response.status(200).json(data);
                    })
                    .catch(error=>next(error))
}
module.exports.getProductById=(request,response,next)=>{
    ProductSchema.findOne({_id:request.params.id})
                .then(data=>{
                    if(data==null)
                        throw new Error("Product not Found")
                    else
                    response.status(200).json(data);
                })
                .catch(error =>next(error))
}
module.exports.addNewProduct=(request,response,next)=>{
    let productObject=new ProductSchema(
        {
            _id:request.body.id,
            title:request.body.title,
            description:request.body.description,
            details:request.body.details,
            price:request.body.price,
            quantity:request.body.quantity,
            colors:request.body.colors,
            rate:request.body.rate,
            category:request.body.category,
            image:request.body.image
        }
    )
    productObject.save()
                    .then(data=>{
                        response.status(201).json({"data":"Added New Product"});
                    })
                    .catch(error=>next(error))
}
module.exports.updateProduct=(request,response,next)=>{
    childSchema.findOneAndUpdate({_id:request.params.id},{
        $set:request.body,
        })
        .then(data=>{
            response.status(200).json({"data":"Updated Successfully"});
        })
        .catch(error=>next(error))
}
module.exports.deleteProduct=(request,response,next)=>{
    ProductSchema.findOneAndRemove({_id:request.params.id})
                .then((data) => {
                    response.status(200).json({"data":"Deleted Successfully"});
                })
                .catch(error=>next(error))
}
module.exports.getProductsByCategory=(request,response,next)=>{
    ProductSchema.find({category:request.params.id})
                .then((data) => {
                    response.status(200).json(data);
                })
                .catch(error=>next(error))
}
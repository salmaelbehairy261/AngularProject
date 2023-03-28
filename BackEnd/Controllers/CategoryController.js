const mongoose=require("mongoose");
require("./../Models/CategoryModel");
const CategorySchema=mongoose.model("Category");

module.exports.getAllCategories=(request,response,next)=>{
    CategorySchema.find({})
                    .then(data=>{
                        response.status(200).json(data);
                    })
                    .catch(error=>next(error))
}

module.exports.addNewCategory=(request,response,next)=>{
    let categoryObject=new CategorySchema(
        {
            _id:request.body.id,
            name:request.body.name,
        }
    )
    categoryObject.save()
                    .then(data=>{
                        response.status(201).json({"data":"Added New Product"});
                    })
                    .catch(error=>next(error))
}
module.exports.updateCategory=(request,response,next)=>{
    CategorySchema.findOneAndUpdate({_id:request.params.id},{
        $set:request.body,
        })
        .then(data=>{
            response.status(200).json({"data":"Updated Successfully"});
        })
        .catch(error=>next(error))
}
module.exports.deleteCategory=(request,response,next)=>{
    CategorySchema.findOneAndRemove({_id:request.params.id})
                .then((data) => {
                    response.status(200).json({"data":"Deleted Successfully"});
                })
                .catch(error=>next(error))
}
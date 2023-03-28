const express=require("express");
const controller=require("./../Controllers/ProductController");
const ProductRoute=express.Router();

ProductRoute.route("/Products")
                .get(controller.getAllProducts)
                .post(controller.addNewProduct)
ProductRoute.route("/Products/:id")
                .put(controller.updateProduct)
                .delete(controller.deleteProduct)

ProductRoute.get("/Product/:id",controller.getProductById)

ProductRoute.get("/Products/:id",controller.getProductsByCategory)
module.exports=ProductRoute;

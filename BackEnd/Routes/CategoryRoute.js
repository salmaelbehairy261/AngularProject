const express=require("express");
const controller=require("./../Controllers/CategoryController");
const CategoryRoute=express.Router();

CategoryRoute.route("/Categories")
                .get(controller.getAllCategories)
                .post(controller.addNewCategory)
CategoryRoute.route("/Categories/:id")
                .put(controller.updateCategory)
                .delete(controller.deleteCategory)

module.exports=CategoryRoute;
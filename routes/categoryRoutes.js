import express from "express";
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';
import { categoryContorller, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryContorller.js";

const router = express.Router();

//routes
//create Category 
router.post(
    '/create-category',
    requireSignIn,
    isAdmin,
    createCategoryController
);

//update category
router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
);
    
//getAll category
router.get('/get-category', categoryContorller);

//single category
router.get('/single-category/:slug',
    singleCategoryController
);

//delete category
router.delete('/delete-category/:id',
    requireSignIn,
    isAdmin,
    deleteCategoryController
);

export default router;
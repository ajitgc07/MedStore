import express from "express";
import { prescriptionImageController } from "../controllers/imageController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

//upload image 
router.post("/upload-image", prescriptionImageController,requireSignIn);

export default router;
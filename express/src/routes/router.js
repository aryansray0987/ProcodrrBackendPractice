import express from "express";
import { upload } from "../middleware/multer.middleware.js";
import {fileUpload, userData} from '../controller/user.controller.js'


const userRouter = express.Router();



userRouter.post("/user", userData);
userRouter.post('/upload', upload.single('resume'), fileUpload);




export { userRouter };

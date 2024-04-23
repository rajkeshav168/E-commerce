import express, {Router} from "express";
import {registerController,loginController,testController, forgotPasswordController,} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();
// routing
// register || method post

router.post("/register",registerController);

// LOGIN || POST
router.post("/login",loginController);

// forgot password
router.post('/forgot-password',forgotPasswordController)

// test routes
router.get('/test',requireSignIn,isAdmin,testController);

// protected route auth 
router.get('/user-auth',requireSignIn,(req,res) => {
    res.status(200).send({ok:true});
});

export default router;
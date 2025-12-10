import express from 'express';
import { getUser, loginUser, registerUser } from '../Controllers/authController.js'
import { adminMiddleware } from '../Middleware/adminMiddleware.js';
import { authMiddleware } from '../Middleware/authMiddleware.js';



const router = express.Router();

router.post("/register", registerUser )
router.post("/login", loginUser)
router.get("/getdata",authMiddleware,adminMiddleware,getUser)

export default router;
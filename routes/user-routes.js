import express from 'express';
import { getAllUser, signup } from '../controllers/user-controller.js'; // Ensure you add .js extension here as well

const router = express.Router();

router.get("/", getAllUser);
router.post("/signup",signup)
export default router;

import express from 'express';
import { getAllUser, signup , login} from '../controllers/user-controller.js'; // Ensure you add .js extension here as well

const router = express.Router();

router.get("/", getAllUser);
router.post("/signup",signup);
router.post("/login",login)
export default router;

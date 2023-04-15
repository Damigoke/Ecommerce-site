import { Router } from "express";
import registerUser from '../controllers/Signup';
const router = Router();

router.post('/register', registerUser)

export default router;

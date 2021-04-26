import { Router } from 'express';
import UserController from '../controller/UserController';

const router = Router();

// Create new user
router.post('/create', UserController.newUser);

export default router;
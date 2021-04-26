import { Router } from 'express';
import { authenticated } from '../middlwares/authenticated';
import PunctuationController from '../controller/PunctuationController';

const router = Router();

// Get all posts
router.get('/getAll', [authenticated], PunctuationController.getAll);

// Create new post
router.post('/create', [authenticated], PunctuationController.newPunctuation);


export default router;
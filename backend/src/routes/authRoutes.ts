import { Router } from 'express';
import { initAdmin, login, forgotPassword, resetPassword } from '../controllers/authController.js';

const router = Router();

router.post('/init-admin', initAdmin);
router.post('/login', login);
router.post('/forgot-password', forgotPassword); 
router.post('/reset-password', resetPassword); 

export default router;
import { Router } from 'express';
import { clockInOut, getHistory } from '../controllers/attendanceController.js';
import { verifyToken } from '../middleware/auth.js';
import { getAllAttendance, updateAttendance } from '../controllers/attendanceController.js';

const router = Router();
router.post('/', verifyToken, clockInOut);
router.get('/', verifyToken, getHistory);
router.get('/all', getAllAttendance); // Endpoint: GET /api/attendance/all
router.patch('/:id', updateAttendance); // Endpoint: PATCH /api/attendance/:id
export default router;
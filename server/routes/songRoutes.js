import express from 'express';
import { getSong, getSongs } from '../controllers/songController.js';

const router = express.Router();

router.route('/').get(getSongs);

router.route('/:slug').get(getSong);

export default router;

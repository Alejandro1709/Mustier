import express from 'express';
import {
  getSong,
  getSongs,
  deleteSong,
} from '../controllers/songController.js';

const router = express.Router();

router.route('/').get(getSongs);

router.route('/:songSlug').get(getSong).delete(deleteSong);

export default router;

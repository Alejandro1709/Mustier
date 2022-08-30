import express from 'express';
import { getAlbums } from '../controllers/albumController.js';

const router = express.Router();

router.route('/').get(getAlbums);

export default router;

import express from 'express';
import {
  createAlbum,
  getAlbum,
  getAlbums,
} from '../controllers/albumController.js';

const router = express.Router();

router.route('/').get(getAlbums).post(createAlbum);

router.route('/:slug').get(getAlbum);

export default router;

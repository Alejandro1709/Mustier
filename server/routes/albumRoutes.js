import express from 'express';
import {
  createAlbum,
  deleteAlbum,
  getAlbum,
  getAlbums,
  updateAlbum,
} from '../controllers/albumController.js';
import { createSong, deleteSong } from '../controllers/songController.js';

const router = express.Router();

router.route('/').get(getAlbums).post(createAlbum);

router.route('/:slug').get(getAlbum).patch(updateAlbum).delete(deleteAlbum);

router.post('/:slug/songs', createSong);

router.delete('/:slug/songs/:songSlug', deleteSong);

export default router;

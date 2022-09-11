import express from 'express';
import {
  createAlbum,
  deleteAlbum,
  getAlbum,
  getAlbums,
  updateAlbum,
  getAlbumSongs,
  getAlbumSong,
  updateAlbumSong,
} from '../controllers/albumController.js';
import { createSong, deleteSong } from '../controllers/songController.js';

const router = express.Router();

router.route('/').get(getAlbums).post(createAlbum);

router.route('/:slug').get(getAlbum).patch(updateAlbum).delete(deleteAlbum);

router.get('/:slug/songs', getAlbumSongs);

router.get('/:slug/songs/:id', getAlbumSong);

router.patch('/:slug/songs/:id', updateAlbumSong);

router.post('/:slug/songs', createSong);

router.delete('/:slug/songs/:songSlug', deleteSong);

export default router;

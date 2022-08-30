import Album from '../models/Album.js';

export const getAlbums = async (req, res) => {
  try {
    const albums = await Album.find();
    res.status(200).json(albums);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

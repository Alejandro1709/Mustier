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

export const getAlbum = async (req, res) => {
  try {
    const album = await Album.findOne({ albumSlug: req.params.slug });
    res.status(200).json(album);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const createAlbum = async (req, res) => {
  const { albumTitle, albumAuthor, albumReleaseDate } = req.body;

  const newAlbum = {
    albumTitle,
    albumAuthor,
    albumSlug: albumTitle.toLowerCase().replaceAll(' ', '-'),
    albumReleaseDate,
  };

  try {
    const album = await Album.create(newAlbum);
    res.status(200).json(album);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

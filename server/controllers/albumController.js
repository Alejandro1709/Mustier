import Album from '../models/Album.js';

export const getAlbums = async (req, res) => {
  try {
    const albums = await Album.find().populate('albumSongs');
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

  try {
    const albumm = await Album.create({
      albumTitle,
      albumAuthor,
      albumReleaseDate,
    });
    res.status(201).json(albumm);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const updateAlbum = async (req, res) => {
  const { albumTitle, albumAuthor, albumReleaseDate } = req.body;

  try {
    const album = await Album.findOneAndUpdate(
      { albumSlug: req.params.slug },
      {
        albumTitle,
        albumAuthor,
        albumReleaseDate,
      },
      {
        runValidators: true,
        new: true,
      }
    );
    res.status(200).json(album);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const deleteAlbum = async (req, res) => {
  try {
    const album = await Album.findOneAndRemove({ albumSlug: req.params.slug });
    album.albumSongs = [];
    await album.save();

    res.status(200).json({ message: 'Album Deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

import Album from '../models/Album.js';
import Song from '../models/Song.js';

export const getSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const getSong = async (req, res) => {
  try {
    const song = await Song.findOne({ songSlug: req.params.slug });
    res.status(200).json(song);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const createSong = async (req, res) => {
  const { songTitle, songAuthor, songReleaseDate, songDuration } = req.body;
  try {
    const album = await Album.findOne({ albumSlug: req.params.slug });

    const song = await Song.create({
      songTitle,
      songAuthor,
      songReleaseDate,
      songDuration,
      songAlbum: album._id,
    });

    album.albumSongs.push(song);

    await album.save();

    res.status(201).json(song);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const updateSong = async (req, res) => {
  const { songTitle, songAuthor, songReleaseDate, songDuration } = req.body;
  try {
    const song = await Song.findOneAndUpdate(
      { songSlug: req.params.songSlug },
      {
        songTitle,
        songAuthor,
        songReleaseDate,
        songDuration,
      },
      {
        runValidators: true,
        new: true,
      }
    );

    res.status(200).json(song);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const deleteSong = async (req, res) => {
  try {
    const album = await Album.findOne({ slug: req.params.slug });

    const song = await Song.findOneAndRemove({ _id: req.params.songSlug });
    album.albumSongs.slice(album.albumSongs.indexOf(song), 1);

    await album.save();

    res.status(200).json({ message: 'Song Removed!' });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

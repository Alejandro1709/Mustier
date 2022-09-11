import Album from '../models/Album.js';
import Song from '../models/Song.js';

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
    const album = await Album.findOne({ albumSlug: req.params.slug }).populate(
      'albumSongs'
    );
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
    const album = await Album.findOne({ albumSlug: req.params.slug });
    console.log(album);
    const songsInAlbum = await Song.find({ songAlbum: album });
    console.log(songsInAlbum);

    songsInAlbum.forEach(async (songInAlbum) => {
      songInAlbum.songAlbum = undefined;
      await songInAlbum.save();
    });

    await Album.deleteOne({ album });

    await album.save();

    res.status(200).json({ message: 'Album Deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const getAlbumSongs = async (req, res) => {
  // Get Album by slug
  const album = await Album.findOne({ albumSlug: req.params.slug });
  // check if album doesnt exists
  if (!album) {
    // TODO: Complete
  }
  // if so, get albums songs
  const songs = await Song.find({ songAlbum: album });
  console.log(songs);
  res.status(200).json(songs);
};

export const getAlbumSong = async (req, res) => {
  // Get Album by slug
  const album = await Album.findOne({ albumSlug: req.params.slug });
  // check if album doesnt exists
  if (!album) {
    // TODO: Complete
  }
  // if so, get albums songs
  const song = await Song.findOne({ _id: req.params.id, songAlbum: album });

  if (!song) {
    // TODO: Complete
  }

  res.status(200).json(song);
};

export const updateAlbumSong = async (req, res) => {
  const { songTitle, songDuration } = req.body;
  // Get Album by slug
  const album = await Album.findOne({ albumSlug: req.params.slug });
  // check if album doesnt exists
  if (!album) {
    // TODO: Complete
  }
  // if so, get albums songs
  const song = await Song.findOneAndUpdate(
    { _id: req.params.id, songAlbum: album },
    {
      songTitle,
      songDuration,
    },
    {
      new: true,
    }
  );

  if (!song) {
    // TODO: Complete
  }

  res.status(200).json(song);
};

// export const deleteAlbumSong = async (req, res) => {
//   // Get Album by slug
//   const album = await Album.findOne({ albumSlug: req.params.slug });
//   // check if album doesnt exists
//   if (!album) {
//     // TODO: Complete
//   }
//   // if so, get albums songs
//   const song = await Song.findOneAndRemove({
//     _id: req.params.id,
//     songAlbum: album,
//   });

//   album.albumSongs.splice(album.albumSongs.indexOf(song), 1);

//   if (!song) {
//     // TODO: Complete
//   }

//   await album.save();

//   res.status(200).json({});
// };

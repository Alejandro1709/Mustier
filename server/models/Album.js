import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema(
  {
    albumTitle: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 6,
    },
    albumAuthor: {
      type: String,
      required: true,
      trim: true,
      minLength: 6,
    },
    albumCover: {
      type: String,
    },
    albumReleaseDate: {
      type: Date,
    },
    albumSongs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Album', albumSchema);

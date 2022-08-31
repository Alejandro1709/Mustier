import mongoose from 'mongoose';

const songSchema = new mongoose.Schema(
  {
    songTitle: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 6,
    },
    songAuthor: {
      type: String,
      required: true,
      trim: true,
      minLength: 6,
    },
    songReleaseDate: {
      type: Date,
    },
    songDuration: {
      type: Number,
      required: true,
      default: 0.0,
    },
    songAlbum: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Album',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Song', songSchema);

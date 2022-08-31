import mongoose from 'mongoose';
import slugify from 'slugify';

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
    songSlug: {
      type: String,
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

songSchema.pre('save', function (next) {
  if (!this.isModified('songTitle')) {
    next();
  }
  this.songSlug = slugify(this.songTitle);
});

export default mongoose.model('Song', songSchema);

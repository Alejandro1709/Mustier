import mongoose from 'mongoose';
import slugify from 'slugify';

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
    albumSlug: {
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

albumSchema.pre('save', function (next) {
  if (!this.isModified('albumTitle')) {
    next();
  }
  this.albumSlug = slugify(this.albumTitle).toLowerCase();
  next();
});

export default mongoose.model('Album', albumSchema);

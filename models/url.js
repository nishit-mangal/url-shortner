import mongoose from "mongoose";

const urlSchema = mongoose.Schema(
  {
    shortLink: {
      type: String,
      unique: true,
      required: true,
    },
    originalLink: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timestamp: {
          type: Date
        },
        _id:false
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

const URL = mongoose.model('url',urlSchema)

export default URL
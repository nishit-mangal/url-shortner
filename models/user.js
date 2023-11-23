import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    password:{
        type:String,
        required:true
    }
  },
  { timestamps: true, versionKey: false }
);

const USER = mongoose.model('user',userSchema)

export default USER
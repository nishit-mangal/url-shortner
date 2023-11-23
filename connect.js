import mongoose from "mongoose";

export async function connectMongoDB(url) {
  mongoose.connect(url)
  .then(()=>console.log("Connected to MongoDB..."))
  .catch((err)=>console.log("Error connecting MongoDB: ", err))
}

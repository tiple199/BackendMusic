import mongoose from "mongoose";
const playlistSchema = new mongoose.Schema({
    Ten: String,
    HinhNen: String
  },{versionKey:false});

export default mongoose.model("Playlist",playlistSchema)
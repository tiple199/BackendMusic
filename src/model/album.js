import mongoose from "mongoose";
const albumSchema = new mongoose.Schema({
    tenAlbum:String,
    tenCaSiAlbum:String,
    hinhAlbum:String,
},{versionKey:false});


export default mongoose.model("Album",albumSchema)
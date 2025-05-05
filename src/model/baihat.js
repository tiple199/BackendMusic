import mongoose from "mongoose";
const songSchema = new mongoose.Schema({
    tenBaiHat: String,
    caSi: String,
    hinhBaiHat: String,
    linkBaiHat: String,
    luotThich: Number,
    albumIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }],
    theLoaiIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Theloai' }],
    playListIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }]
  },{versionKey:false});

export default mongoose.model("Baihat",songSchema)
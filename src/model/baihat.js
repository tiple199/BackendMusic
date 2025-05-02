import mongoose from "mongoose";
const songSchema = new mongoose.Schema({
    TenBaiHat: String,
    CaSi: String,
    HinhBaiHat: String,
    LinkBaiHat: String,
    LuotThich: Number,
    albumIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }],
    theLoaiIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Theloai' }],
    playListIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }]
  },{versionKey:false});

export default mongoose.model("Baihat",songSchema)
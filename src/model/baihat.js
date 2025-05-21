import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  TenBaiHat: { type: String, required: true },
  CaSi: { type: String, required: true },
  HinhBaiHat: { type: String, required: true },
  LinkBaiHat: { type: String, required: true },
  LuotThich: { type: Number, default: 0 },
  albumIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Album" }],
  theLoaiIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Theloai" }],
  playListIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Playlist" }]
}, { versionKey: false });

export default mongoose.model("Baihat", songSchema);

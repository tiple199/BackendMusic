import mongoose from "mongoose";
const theloaiSchema = new mongoose.Schema({
    TenTheLoai: String,
    HinhTheLoai: String,
    chuDeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chude' }
  },{versionKey:false});

export default mongoose.model("Theloai",theloaiSchema)
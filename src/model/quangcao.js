import mongoose from "mongoose";
const quangcaoSchema = new mongoose.Schema({
    HinhAnh: String,
    baiHatId: { type: mongoose.Schema.Types.ObjectId, ref: 'Baihat' }
  },{versionKey:false});
export default mongoose.model("Quangcao",quangcaoSchema)
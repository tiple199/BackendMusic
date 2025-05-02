import mongoose from "mongoose";
const chudeSchema = new mongoose.Schema({
    TenChuDe: String,
    HinhChuDe: String
  },{versionKey: false});

export default mongoose.model("Chude",chudeSchema)
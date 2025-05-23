import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
    tenNgheSi: String,
    moTa: String,
    hinhAnhNgheSi: String
}, { versionKey: false });

export default mongoose.model("Artist", artistSchema);


import mongoose from "mongoose";
const favoriteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    songId: { type: mongoose.Schema.Types.ObjectId, ref: 'Baihat', required: true },
}, { timestamps: true, versionKey: false });
favoriteSchema.index({ userId: 1, songId: 1 }, { unique: true });

export default mongoose.model("Favorite", favoriteSchema);
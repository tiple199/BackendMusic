import mongoose from "mongoose";

const userPlaylistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    playlistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Playlist",
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

// Mỗi user chỉ có thể tạo 1 playlist với cùng id → đảm bảo duy nhất
userPlaylistSchema.index({ userId: 1, playlistId: 1 }, { unique: true });

export default mongoose.model("UserPlaylist", userPlaylistSchema);
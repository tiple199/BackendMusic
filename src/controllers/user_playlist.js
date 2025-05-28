import UserPlaylist from "../model/user_playlist.js";
import Playlist from "../model/playlist.js";

// Tạo playlist mới cho người dùng
export const createPlaylist = async (req, res) => {
    const { userId, ten } = req.body;

    if (!userId || !ten) {
        return res.status(400).json({ message: "Thiếu userId hoặc tên playlist" });
    }

    try {
        const playlist = new Playlist({ Ten: ten, HinhNen: "" });
        await playlist.save();

        const userPlaylist = new UserPlaylist({
            userId,
            playlistId: playlist._id,
        });
        await userPlaylist.save();

        res.status(201).json({ message: "Tạo playlist thành công", playlist });
    } catch (error) {
        console.error("Lỗi tạo playlist:", error);
        res.status(500).json({ message: "Lỗi server", error: error.message });
    }
};

// Lấy tất cả playlist của một người dùng
export const getAllPlaylistsFromUser = async (req, res) => {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ message: "Thiếu userId" });
    }

    try {
        const userPlaylists = await UserPlaylist.find({ userId }).populate("playlistId");
        const playlists = userPlaylists.map(up => up.playlistId);

        res.status(200).json(playlists);
    } catch (error) {
        console.error("Lỗi lấy playlist:", error);
        res.status(500).json({ message: "Lỗi server", error: error.message });
    }
};

// Xoá 1 playlist của người dùng
export const deletePlaylist = async (req, res) => {
    const { userId, playlistId } = req.body;

    if (!userId || !playlistId) {
        return res.status(400).json({ message: "Thiếu userId hoặc playlistId" });
    }

    try {
        await UserPlaylist.findOneAndDelete({ userId, playlistId });
        await Playlist.findByIdAndDelete(playlistId);

        res.status(200).json({ message: "Xoá playlist thành công" });
    } catch (error) {
        console.error("Lỗi xoá playlist:", error);
        res.status(500).json({ message: "Lỗi server", error: error.message });
    }
};

import playlist from "../model/playlist.js";
import userplaylist from "../model/user_playlist.js"
export const getAllPlaylists = async (req,res) => {
    try {
            const data = await playlist.find();
            if(data.length < 0 ){
                return res.status(404).json({message: "Khong tim thay bai hat!"})
            }
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({message: error.message});
    }
}
export const getPlaylistById = async (req,res) => {
    try {
            const data = await playlist.find({_id: req.params._id});
            if(data.length < 0 ){
                return res.status(404).json({message: "Khong tim thay bai hat!"})
            }
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({message: error.message});
    }
}
export const addPlaylist = async (req,res) => {
    try {
            const data = await playlist(req.body).save();
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({message: error.message});
    }
}

// Cập nhật lại tên playlis
export const updatePlaylistName = async (req, res) => {
  try {
    const { id } = req.params;
    const { newName } = req.body;

    if (!newName) {
      return res.status(400).json({ message: "Tên mới không được bỏ trống" });
    }

    const updated = await playlist.findByIdAndUpdate(
      id,
      { Ten: newName },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Xóa playlist
export const deletePlaylist = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await playlist.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Playlist not found" });

    // Xóa tất cả liên kết giữa playlist và user trong bảng phụ
    await userplaylist.deleteMany({ playlistId: id });

    res.json({ message: "Deleted playlist and related user-playlist links" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

import baihat from "../model/baihat.js";
import mongoose from "mongoose";

export const getAllSongs = async (req, res) => {
    try {
        const data = await baihat.find();
        console.log(">>> SONG DATA:", data);

        if (!data || data.length === 0) {
            return res.status(404).json({ message: "Không tìm thấy bài hát!" });
        }

        res.status(200).json(data);
    } catch (error) {
        console.error("Lỗi getAllSongs:", error);
        res.status(500).json({ message: error.message });
    }
};


export const getSongById = async (req,res) => {
    try {
            const data = await baihat.find({_id: req.params._id});
            console.log("oke")
            if(data.length < 0 ){
                return res.status(404).json({message: "Khong tim thay bai hat!"})
            }
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({message: error.message});
    }
}
export const addSong = async (req,res) => {
    try {
            console.log("BODY NHẬN ĐƯỢC:", req.body);
            const data = await baihat(req.body).save();
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({message: error.message});
    }
};
// GET bài hát theo thể loại
export const getSongsByTheLoai = async (req, res) => {
    try {
        const theLoaiId = req.params.theLoaiId;
        const data = await baihat.find({
            theLoaiIds: { $in: [new mongoose.Types.ObjectId(theLoaiId)] }
        });

        if (!data || data.length === 0) {
            return res.status(404).json({ message: "Không tìm thấy bài hát thuộc thể loại này!" });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// GET bài hát theo nghệ sĩ
export const getSongsByArtist = async (req, res) => {
    try {
        const artistId = req.params.artistId;

        const data = await baihat.find({
            artistId: new mongoose.Types.ObjectId(artistId)
        });

        if (!data || data.length === 0) {
            return res.status(404).json({ message: "Không tìm thấy bài hát của nghệ sĩ này" });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getSongsByAlbum = async (req, res) => {
    try {
        const albumId = req.params.albumId;

        const songs = await baihat.find({
            albumIds: { $in: [new mongoose.Types.ObjectId(albumId)] }
        });

        if (!songs || songs.length === 0) {
            return res.status(404).json({ message: "Không tìm thấy bài hát trong album này!" });
        }

        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const searchSongs = async (req, res) => {
  const keyword = req.query.keyword;
  try {
    const songs = await baihat.find({
      TenBaiHat: { $regex: keyword, $options: 'i' }  // không phân biệt hoa thường
    });

    if (songs.length === 0) {
      return res.status(404).json({ message: "Không tìm thấy bài hát nào!" });
    }

    res.status(200).json(songs);
  } catch (error) {
    console.error("Lỗi tìm kiếm:", error);
    res.status(500).json({ message: "Lỗi server!" });
  }
};

export const getTopLikedSongs = async (req, res) => {
  try {
    const songs = await baihat
      .find()
      .sort({ LuotThich: -1 }) // Sắp xếp giảm dần theo lượt tym
      .limit(5);               // Lấy top 5 bài

    if (!songs || songs.length === 0) {
      return res.status(404).json({ message: "Không có bài hát nào!" });
    }

    res.status(200).json(songs);
  } catch (error) {
    console.error("Lỗi khi lấy top bài hát:", error);
    res.status(500).json({ message: "Lỗi server!" });
  }
};


// Lấy tất cả bài hát theo playlistId
export const getSongsByPlaylistId = async (req, res) => {
    try {
        const { playlistId } = req.params;

        // Tìm tất cả bài hát có chứa playlistId trong mảng playListIds
        const songs = await baihat.find({ playListIds: playlistId });

        if (!songs || songs.length === 0) {
            return res.status(404).json({ message: "Không tìm thấy bài hát trong playlist này." });
        }

        res.status(200).json(songs);
    } catch (error) {
        console.error("Lỗi khi lấy bài hát theo playlistId:", error);
        res.status(500).json({ message: "Lỗi máy chủ." });
    }
};

export const getRandomSong = async (req, res) => {
    try {
        const data = await baihat.aggregate([{ $sample: { size: 1 } }]);

        if (!data || data.length === 0) {
            return res.status(404).json({ message: "Không tìm thấy bài hát!" });
        }

        res.status(200).json(data[0]); // chỉ trả về bài hát đầu tiên trong mảng
    } catch (error) {
        console.error("Lỗi getRandomSong:", error);
        res.status(500).json({ message: error.message });
    }
};

// Thêm bài hát vào danh sách phát
export const addSongToPlaylist = async (req, res) => {
  const { playlistId, songId } = req.body;

  try {
    const song = await baihat.findById(songId);
    if (!song) return res.status(404).json({ message: "Bài hát không tồn tại" });

    // Kiểm tra nếu đã có trong playlist
    if (song.playListIds.includes(playlistId)) {
      return res.status(200).json({ message: "Bài hát đã có trong playlist" });
    }

    // Nếu chưa có thì thêm
    await baihat.findByIdAndUpdate(songId, {
      $addToSet: { playListIds: playlistId }
    });

    res.status(200).json({ message: "Đã thêm vào playlist" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Xóa bài hát khỏi danh sách phát
export const removeSongFromPlaylist = async (req, res) => {
  const { playlistId, songId } = req.body;
  try {
    await baihat.findByIdAndUpdate(songId, { $pull: { playListIds: playlistId } });
    res.status(200).json({ message: "Đã xóa khỏi playlist" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



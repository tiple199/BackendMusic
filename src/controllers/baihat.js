import baihat from "../model/baihat.js";
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
}

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
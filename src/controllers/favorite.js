import Favorite from "../model/favorite.js";
import Baihat from "../model/baihat.js";
import baihat from "../model/baihat.js";

// Thêm yêu thích
export const addFavorite = async (req, res) => {
    const { userId, songId } = req.body;
    // console.log(songId)
    try {
        const favorite = await Favorite.create({ userId, songId });
        await Baihat.findByIdAndUpdate(songId, { $inc: { luotThich: 1 } });
        res.status(201).json(favorite);
    } catch (err) {
        res.status(400).json({ error: 'Có lỗi xảy ra!' });
    }
    

}

// Xóa bài hát khỏi danh sách yêu thích
export const removeFavorite = async (req, res) => {
    const { userId, songId } = req.body;
    await Favorite.deleteOne({ userId, songId });
    await baihat.findByIdAndUpdate(songId, { $inc: { luotThich: -1 } });

    res.status(204).end();
}

// Lấy tất cả các bài hát thuộc danh sách yêu thích của user
export const getAllFavoriteFromUser = async (req, res) => {
    const userId = req.query.userId;
    // console.log(userId)
    const favorites = await Favorite.find({ userId }).populate('songId');
    res.json(favorites.map(f => f.songId)); // Trả về list bài hát
}

// Kiểm tra bài hát đã thích chưa
export const checkFavorite = async (req, res) => {
    const { userId, songId } = req.query;

    if (!userId || !songId) {
        return res.status(400).json({ message: "Thiếu userId hoặc songId" });
    }

    const exists = await Favorite.findOne({ userId, songId });
    res.json({ isFavorite: !!exists }); // true hoặc false
};




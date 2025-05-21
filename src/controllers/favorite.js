import Favorite from "../model/favorite.js";
import Baihat from "../model/baihat.js";
// Thêm yêu thích
export const addFavorite = async (req, res) => {
    const { userId, songId } = req.body;
    try {
        const favorite = await Favorite.create({ userId, songId });
        await Baihat.findByIdAndUpdate(songId, { $inc: { luotThich: 1 } });
        res.status(201).json(favorite);
    } catch (err) {
        res.status(400).json({ error: 'Có lỗi xảy ra!' });
    }
    

}
export const removeFavorite = async (req, res) => {
    const { userId, songId } = req.body;
    await Favorite.deleteOne({ userId, songId });
    await Song.findByIdAndUpdate(songId, { $inc: { luotThich: -1 } });

    res.status(204).end();
}
export const getAllFavoriteFromUser = async (req, res) => {
    const userId = req.query.userId;
    const favorites = await Favorite.find({ userId }).populate('songId');
    res.json(favorites.map(f => f.songId)); // Trả về list bài hát
}




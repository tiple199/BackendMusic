import artist from "../model/artist.js";

// Lấy tất cả nghệ sĩ
export const getAllArtists = async (req, res) => {
    try {
        const data = await artist.find();
        console.log(data)
        if (data.length <= 0) {
            return res.status(404).json({ message: "Không tìm thấy nghệ sĩ!" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy nghệ sĩ theo ID
export const getArtistById = async (req, res) => {
    try {
        const data = await artist.find({ _id: req.params._id });
        if (data.length <= 0) {
            return res.status(404).json({ message: "Không tìm thấy nghệ sĩ!" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm nghệ sĩ mới
export const addArtist = async (req, res) => {
    try {
        const data = await artist(req.body).save();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

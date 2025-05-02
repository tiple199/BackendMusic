import baihat from "../model/baihat";
export const getAllSongs = async (req,res) => {
    try {
            const data = await baihat.find();
            if(data.length < 0 ){
                return res.status(404).json({message: "Khong tim thay bai hat!"})
            }
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({message: error.message});
    }
}
export const getSongById = async (req,res) => {
    try {
            const data = await baihat.find({_id: req.params._id});
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
            const data = await baihat(req.body).save();
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({message: error.message});
    }
}
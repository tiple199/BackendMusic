import album from "../model/album.js";
export const getAllAlbums = async (req,res) => {
    try {
            const data = await album.find();
            if(data.length < 0 ){
                return res.status(404).json({message: "Khong tim thay album!"})
            }
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({message: error.message});
    }
}
export const getAlbumById = async (req,res) => {
    try {
            const data = await album.find({_id: req.params._id});
            if(data.length < 0 ){
                return res.status(404).json({message: "Khong tim thay album!"})
            }
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({message: error.message});
    }
}
export const addAlbum = async (req,res) => {
    try {
            const data = await album(req.body).save();
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({message: error.message});
    }
}
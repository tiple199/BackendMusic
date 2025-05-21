import playlist from "../model/playlist.js";
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
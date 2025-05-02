import Chude from "../model/chude";
export const getAllChudes = async (req,res) => {
    try {
            const data = await Chude.find();
            if(data.length < 0 ){
                return res.status(404).json({message: "Khong tim thay bai hat!"})
            }
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({message: error.message});
    }
}
export const getChudeById = async (req,res) => {
    try {
            const data = await Chude.find({_id: req.params._id});
            if(data.length < 0 ){
                return res.status(404).json({message: "Khong tim thay bai hat!"})
            }
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({message: error.message});
    }
}
export const addChude = async (req,res) => {
    try {
            const data = await Chude(req.body).save();
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({message: error.message});
    }
}
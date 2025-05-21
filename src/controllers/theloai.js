import theloai from "../model/theloai.js";
export const getAllTheloais = async (req,res) => {
    try {
            const data = await theloai.find();
            if(data.length < 0 ){
                return res.status(404).json({message: "Khong tim thay bai hat!"})
            }
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({message: error.message});
    }
}
export const getTheloaiById = async (req,res) => {
    try {
            const data = await theloai.find({_id: req.params._id});
            if(data.length < 0 ){
                return res.status(404).json({message: "Khong tim thay bai hat!"})
            }
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({message: error.message});
    }
}
export const addTheloai = async (req,res) => {
    try {
            const data = await theloai(req.body).save();
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({message: error.message});
    }
}
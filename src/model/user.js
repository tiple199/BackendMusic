import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    email: {
        type : String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
        minlength: 6
    }
},{timestamps: true, versionKey: false});
userSchema.index({username: 1, email: 1});

export default mongoose.model("User",userSchema);
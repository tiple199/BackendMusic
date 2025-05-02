import user from "../model/user";
import {registerSchema} from "../schemas/auth";
import bcryptjs from "bcryptjs";
export const signup = async (req, res)=>{
    // lay du lieu tu client
    const {username, password, confirmPassword,email} = req.body;
    // Kiem tra tinh hop  le, nếu abortEarly bằng true thì tháy lỗi nó sẽ ngừng lại
    const {error} = registerSchema.validate(req.body,{abortEarly: false});
    if(error){
        const messages = error.details.map(message => message.message);
        return res.status(400).json(messages);
        
    }
    // Kiem tra user con ton tai khong
    const existUser = await user.findOne({email});
    if(existUser) {
        return res.status(400).json({
            message:["Email da ton tai"],
        })
    }
    // Ma hoa mat khau bcryptjs
    const hashPassword = await bcryptjs.hash(password,10);
    // Luu vao database
    const User = (await user.create({
        username,email,password: hashPassword
    }));

    // tra ve thong tin user
    User.password = undefined;
    return res.status(201).json({
        User
    })
    
}
import User from '../model/User.js';
import bcrypt from "bcryptjs";

export const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find();  // Use the correct model name
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server Error" });
    }

    if (!users) {
        return res.status(404).json({ message: "No Users Found" });
    }

    return res.status(200).json({ users });
};

export const signup = async (req,res, next) => {
    const {name, email, password} = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({email});

    } catch (error) {
       return console.log(err);
    }
    if(existingUser) {
        return res.status(400).json({message: "UserAlready Exist! please login"})
    }
    const hashedPassword = bcrypt.hashSync(password);

    const user = new User({
        name,
        email,
        password : hashedPassword,
        blogs : [],
           
    });

    try {
        await user.save();

    } catch (error) {
       return console.log(err);
        
    }
    return res.status(201).json({user})

};

export const login = async (req, res, next) =>{
    const { email, password} = req.body;
    let existingUser;

    try {
        existingUser = await User.findOne({email})
    } catch (err) {
        return console.log(err);
        
    }
    if (!existingUser) {
        return res
        .status(404)
        .json({message : "Couldn't Find the User by this Mail"});
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorrect) {
        return res.status(400).json({message : "Incorect PassWord"})
    } 
    return res.status(200).json({message: "Login Successfully"})
}

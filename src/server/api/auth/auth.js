import express from "express";
import dotenv from "dotenv";
import dbConfig from "../../database/dbConfig.js";
import jwt from "jsonwebtoken";
import User from "../../database/models/user.js";
import bcrypt from "bcrypt";
import authenticate from "../../middleware/authenticate.js";
dotenv.config();
dbConfig();
const router = express.Router();
const generateToken = (payload, secret, expiresIn = "1d") => {
    return jwt.sign(payload, secret, { expiresIn });
};
router.post('/signup', authenticate,async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const existUser = await User.findOne({ email });
        if(existUser){
            return res.status(401).json({ message: "User already exists" });
        }
        const user = await User.create({ username, email, password: hashedPassword });
        const token = generateToken({ userId: user._id }, process.env.JWT_SECRET);
        res.cookie("token", token, { httpOnly: true, secure: false });
        res.status(201).json({ message: "User created successfully", user,token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

router.post('/login', authenticate,async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user){
            return res.status(401).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = generateToken({ userId: user._id }, process.env.JWT_SECRET);
        res.cookie("token", token, { httpOnly: true, secure: false });
        res.status(200).json({ message: "Login successful", user, token });
    }catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
})
export default router;
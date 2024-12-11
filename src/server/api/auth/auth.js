import express from "express";
import dotenv from "dotenv";
import dbConfig from "../../database/dbConfig.js";
import jwt from "jsonwebtoken";
import User from "../../database/models/user.js";
import bcrypt from "bcrypt";

dotenv.config();
dbConfig();
const router = express.Router();
const generateToken = (payload, secret, expiresIn = "1d") => {
    return jwt.sign(payload, secret, { expiresIn });
};

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized, no token found" });
    }

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (err) {
        res.clearCookie("token");
        return res.status(401).json({ message: "Unauthorized, invalid token" });
    }
};

router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashedPassword });
        const token = generateToken({ userId: user._id }, process.env.JWT_SECRET);
        res.cookie("token", token, { httpOnly: true, secure: false });
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

router.post('/login', async (req, res) => {
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
        res.status(200).json({ message: "Login successful", user });
    }catch (e) {
        console.log(e);
    }
})
export default router;
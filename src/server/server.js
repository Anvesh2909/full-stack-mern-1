import express from "express";
import dotenv from "dotenv";
import dbConfig from "./database/dbConfig.js";
import router from "./api/auth/auth.js";

dotenv.config();
dbConfig();

const app = express();

app.use(express.json());

app.use("/api/auth", router);
app.get("/", (req, res) => {
    res.send("Welcome to the Landing Page!");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

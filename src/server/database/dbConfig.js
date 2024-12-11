import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbConfig = async () => {
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
    }catch (e){
        console.log(e);
    }
}
export default dbConfig;
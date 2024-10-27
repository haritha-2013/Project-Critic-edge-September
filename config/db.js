import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Database connected successfully")
    }
    catch (error) {
        console.log(error)
    }
    
}
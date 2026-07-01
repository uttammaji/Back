import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(
            `${process.env.MONGODB_URL}/${DB_NAME}`
        );

        console.log(
            `MongoDB Connected: ${connectInstance.connection.host}`
        );
    } catch (error) {
        console.error("MongoDB Error:", error);
        process.exit(1);
    }
};

export default connectDB;
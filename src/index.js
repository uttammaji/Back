// import mongoose from "mongoose";
// import { DB_NAME } from "./constrant.js";

// require("dotenv").config({ path: "./.env" });

import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
});



connectDB();





























/*(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`, 
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
})();*/
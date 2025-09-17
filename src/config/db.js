import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";   
const mongoURI = "mongodb+srv://flowagentic_db_user:dMKMO1pbg6jpxWdZ@zomato.aqjs5aa.mongodb.net/?retryWrites=true&w=majority&appName=zomato";
// const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI)
.then(()=>{
    console.log("Connected to MongoDB");
}) 
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

const db=mongoose.connection;
export default db;

import express from "express";
const app = express();
import dotenv from "dotenv"; 
dotenv.config();
import cors from "cors"
app.use(cors())
import db from "./src/config/db.js";
import { nanoid } from "nanoid";
const PORT = process.env.PORT || 5000;      
import urlRoutes from "./src/routes/url.route.js";
//parsing json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", urlRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

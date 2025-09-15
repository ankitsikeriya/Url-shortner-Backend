import Urlmodel from "../models/url.model.js";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
dotenv.config();
const createUrl = async (req, res) => {
    const { fullUrl } = req.body;
    const shortUrl = nanoid(6);
    const url = new Urlmodel({ fullUrl, shortUrl });
    await url.save();
    res.json(process.env.MAIN_ROUTE+"/"+url.shortUrl);
}
//create custom short url
const createCustomUrl = async (req, res) => {
    const { fullUrl, customShortUrl } = req.body;
    const existingUrl = await Urlmodel.findOne({ shortUrl: customShortUrl });
    if (existingUrl) {
        return res.status(400).json({ message: "Custom short URL already exists" });
    }
    const url = new Urlmodel({ fullUrl, shortUrl: customShortUrl });
    await url.save();
    res.json(process.env.MAIN_ROUTE+"/"+url.shortUrl);
}


export { createUrl, createCustomUrl };
import mongoose from "mongoose";
const urlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    clicks: {
        type: Number,
        default: 0
    },
}, { timestamps: true });
const Urlmodel = mongoose.model("Url", urlSchema);
export default Urlmodel;

import { Router } from "express";
import { createUrl,createCustomUrl} from "../controllers/url.controller.js";
const router = Router();

router.post("/create", createUrl);
//custom short url route should be at the end of all routes
router.post("/create/custom", createCustomUrl);

export default router;
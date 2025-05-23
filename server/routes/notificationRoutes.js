import { storeToken } from "../controllers/notificationController.js";

import express from "express";
const router = express.Router();

router.post("/storeToken", storeToken);

export default router;

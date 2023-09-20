import express from "express";
import { getWeatherHandler } from "../controllers/weatherController.js";

const router = express.Router();

router.get("/", getWeatherHandler);

export default router;

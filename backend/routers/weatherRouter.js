import express from "express";
import { getWeatherHandler } from "../controllers/weatherController.js";

const router = express.Router();

router.get("/:dateValue", getWeatherHandler);

export default router;

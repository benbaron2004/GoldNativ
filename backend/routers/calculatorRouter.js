import express from "express";
import { getAllCalculationsHandler } from "../controllers/calculatorController.js";

const router = express.Router();

router.get("/:loadmass", getAllCalculationsHandler);

export default router;

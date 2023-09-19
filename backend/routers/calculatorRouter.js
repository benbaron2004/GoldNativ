import express from "express";
import { getAllCalculationsHandler } from "../controllers/calculatorController.js";

const router = express.Router();

router.get("/:loadMass", getAllCalculationsHandler);

export default router;

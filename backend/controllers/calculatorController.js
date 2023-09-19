import { getPysicalCalcFromMass } from "../services/calculatorService.js";

const getAllCalculationsHandler = async (req, res) => {
  try {
    const getAllCalculations = await getPysicalCalcFromMass(req.params.loadMass);
    res.json(getAllCalculations);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while getting calculations." });
  }
};

export { getAllCalculationsHandler };

const getPysicalCalcFromMass = async (loadMass) => {
  const AIRPLANE_MASS = 35000.0;
  const AIRPLANE_SPEED = 140.0;
  const AIRPLANE_POWER = 100000.0;
  const MAX_TAKEOFF_TIME = 60.0;
  if (loadMass <= 0) {
    throw new Error("load mass must be greater than 0");
  }
  const acceleration = AIRPLANE_POWER / (AIRPLANE_MASS + parseInt(loadMass));
  const takeoffTime = AIRPLANE_SPEED / acceleration;
  const takeoffDistance = (0.5 * acceleration * (Math.pow(takeoffTime, 2)));

  let calculations = {
    takeoffDistance,
    takeoffTime,
  };

  if (takeoffTime > MAX_TAKEOFF_TIME) {
    const overweight = (takeoffTime - MAX_TAKEOFF_TIME) * parseInt(loadMass);
    calculations.overweight = overweight;
  }

  return calculations;
};

export { getPysicalCalcFromMass };

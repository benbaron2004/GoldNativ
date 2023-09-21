import { getWeather } from "../services/weatherService.js";

const getWeatherHandler = async (req, res) => {
  try {
    const allWeather = await getWeather(req.params.dateValue);
    res.json(allWeather);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while getting weather data" });
  }
};

export { getWeatherHandler };

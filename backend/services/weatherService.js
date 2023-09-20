import { getWeatherData } from "../repositories/weatherRepository.js";

const getWeather = async () => {
  const response = await getWeatherData();

  return response.data;
};

export { getWeather };

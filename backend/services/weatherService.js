import { getWeatherData } from "../repositories/weatherRepository.js";

const getWeather = async (dateValue) => {
  const response = await getWeatherData(dateValue);

  return response.data;
};

export { getWeather };

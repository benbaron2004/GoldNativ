import axios from "axios";

const SERVER_URL = "http://localhost:3000";

export const getCalculations = async (loadmass) => {
  try {
    const response = await axios.get(`${SERVER_URL}/calculations/${loadmass}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching calculations:", error);
    throw new Error("Error fetching calculations");
  }
};

export const getWeather = async (dateValue) => {
  try {
    return await axios.get(`${SERVER_URL}/weather/${dateValue}`);
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw new Error("Error fetching waether");
  }
};

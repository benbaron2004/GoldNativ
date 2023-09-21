import axios from "axios";

const getWeatherData = async (dateValue) => {
  try {
    const response = await axios.get(
      `https://archive-api.open-meteo.com/v1/archive?latitude=30&longitude=35&start_date=${dateValue}&end_date=${dateValue}&hourly=temperature_2m`
    );

    return response;
  } catch (error) {
    console.error("שגיאה בביצוע הבקשה לשרת", error);
  }
};

export { getWeatherData };

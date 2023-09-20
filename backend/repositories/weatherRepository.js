import axios from "axios";

const getWeatherData = async () => {
  try {
    const response = await axios.get(
      "https://archive-api.open-meteo.com/v1/archive?latitude=30&longitude=35&start_date=2023-01-01&end_date=2023-01-01&hourly=temperature_2m"
    );

    return response;
  } catch (error) {
    console.error("שגיאה בביצוע הבקשה לשרת", error);
  }
};

export { getWeatherData };

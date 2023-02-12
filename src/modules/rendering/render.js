import getWeatherData from '../openweather/getCurrentWeather.js';
import getLatAndLon from '../openweather/getLocation.js';

const getCurrentWeather = async (cityName) => {
  const { lat, lon, city } = await getLatAndLon(cityName);
  const data = await getWeatherData(lat, lon);
  return {
    temperature: data.main.temp,
    conditions: data.weather[0].main,
    icon: data.weather[0].icon,
    city,
    country: data.sys.country,
  };
};

export default getCurrentWeather;
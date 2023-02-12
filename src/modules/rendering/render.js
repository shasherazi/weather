import getWeatherData from '../openweather/getCurrentWeather.js';
import getLatAndLon from '../openweather/getLocation.js';

// const temperature = document.querySelector('.weather-temp');
// const conditions = document.querySelector('.weather-conditions');
// const cityName = document.querySelector('input');
// const conditionsIcon = document.querySelector('.weather-conditions-icon');

const getCurrentWeather = async (cityName) => {
  const { lat, lon, city } = await getLatAndLon(cityName);
  const data = await getWeatherData(lat, lon);
  return {
    temperature: data.main.temp,
    conditions: data.weather[0].main,
    icon: data.weather[0].icon,
    city,
  };
};

export default getCurrentWeather;
import * as dotenv from 'dotenv';
import getLocationByName from './getLocationByName.js';

dotenv.config();

const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = process.env.OPENWEATHER_API_KEY;

const getCurrentWeather = async (lat, lon) => {
  const response = await fetch(
    `${url}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
  );
  return response.json();
};

export default getCurrentWeather;
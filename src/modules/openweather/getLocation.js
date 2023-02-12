import * as dotenv from 'dotenv';

dotenv.config();

const url = 'https://api.openweathermap.org/geo/1.0/direct?q=';
const apiKey = process.env.OPENWEATHER_API_KEY;

const getLocationData = async (cityName) => {
  const response = await fetch(`${url}${cityName}&limit=1&appid=${apiKey}`);
  const data = response.json();
  return data;
};

const getLatAndLon = async (cityName) => {
  const data = await getLocationData(cityName);
  return { lat: data[0].lat, lon: data[0].lon, city: data[0].name };
};

export default getLatAndLon;
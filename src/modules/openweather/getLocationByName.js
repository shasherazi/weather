import * as dotenv from 'dotenv';

dotenv.config();

const url = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const apiKey = process.env.OPENWEATHER_API_KEY;

const getLocationByName = async (cityName) => {
  const response = await fetch(`${url}${cityName}&limit=1&appid=${apiKey}`);
  const data = response.json();
  return data;
//   return { lat: data[0].lat, lon: data[0].lon };
};

// (async () => {
//   const data = await getLocationByName('Jhang');
//   console.log(data[0].lon, data[0].lat);
// })();

export default getLocationByName;
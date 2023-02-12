import getCurrentWeather from './rendering/render.js';

const form = document.querySelector('form');
const cityDiv = document.querySelector('.weather-city');
const temperatureDiv = document.querySelector('.weather-temp');
const conditionsDiv = document.querySelector('.weather-conditions');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const cityName = document.querySelector('input').value;
  if (cityName === '') {
    document.querySelector('input').placeholder = 'Please enter a city name';
    document.querySelector('input').classList.add('invalid');
  } else {
    document.querySelector('input').placeholder = 'City name e.g. New York';
    document.querySelector('input').classList.remove('invalid');
    const {
      temperature,
      conditions,
      icon,
      city,
    } = await getCurrentWeather(cityName);
    console.log(temperature, conditions, icon, city);
    cityDiv.textContent = city;
    temperatureDiv.textContent = `${Math.round(temperature)}°C`;
    conditionsDiv.textContent = conditions;
  }
});
import getCurrentWeather from './rendering/render.js';

const form = document.querySelector('form');
const cityDiv = document.querySelector('.weather-city');
const countryDiv = document.querySelector('.weather-country');
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
      city,
      country,
    } = await getCurrentWeather(cityName);
    cityDiv.textContent = `${city}, `;
    countryDiv.textContent = country;
    temperatureDiv.textContent = `${Math.round(temperature)}°C`;
    conditionsDiv.textContent = conditions;
  }
});
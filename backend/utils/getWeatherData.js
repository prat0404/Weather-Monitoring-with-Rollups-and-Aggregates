const fetch = require('node-fetch');

const API_KEY = 'ea9f1b951e925127406cd878d46925c6';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/';

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  const response = await fetch(url);
  const data = await response.json();
  return data;
};
console.log(`Fetching weather data for ${infoType} with params:`, searchParams);
const data = await response.json();
console.log("Weather Data:", data);


module.exports = getWeatherData;
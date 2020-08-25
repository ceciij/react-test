import pako from 'pako';
import gzip from './assets/city.list.json.gz';

const defaultCity = "Ciudad de México";
const defaultCountry = "MX";
const defaultId = 3527646; // Id de CDMX
const cities = {
  parsed: false,
  data: []
};
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const codes = {
  MX: 'Mexico',
  US: 'United States of America',
  UK: 'United Kindom',
  FR: 'France',
};
const kelvinRatio = 273.15;

const buildURL = (id = defaultId) => {
  const params = new URLSearchParams({
    id,
    appid: process.env.REACT_APP_APP_ID,
  }).toString();
  
  return `${URL}?${params}`
}

const getCities = async () => {
  if (cities.parsed) return cities.data;

  try {
    const r = await fetch(gzip);
    const b = await r.blob();
    const buf = await b.arrayBuffer();
    const c = new Uint8Array(buf);
    const s = pako.inflate(c, { to: 'string' });
    cities.data = JSON.parse(s);
    cities.parsed = true;
    return cities.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

const getCitiesByCountry = async (country = defaultCountry) =>
  (await getCities()).filter(c => c.country === country)

const getCityByNameAndCountry = async (city = defaultCity, country = defaultCountry) =>
  (await getCitiesByCountry(country)).find(c => c.name === city)

const getCityByName = async (city = defaultCity) =>
  (await getCities()).find(c => c.name === city)

const getWeatherById = async (id = defaultId) => {
  try {
    const r = await fetch(buildURL(id));
    return await r.json();
  } catch(e) {
    console.error(e);
    return {};
  }
}

const getCountryByCode = (code = defaultCountry) => codes[code]

const objectIsEmpty = (obj = {}) =>
  Object.keys(obj).length === 0 && obj.constructor === Object

const kelvin2celsius = (t = kelvinRatio) => parseInt(t - kelvinRatio, 10);

const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours(); 
  const minutes = date.getMinutes();
  const timezone = date.toString().match(/\(([A-Za-z\s].*)\)/)[1];

  return `as of ${hours}:${String(minutes).padStart(2, '0')} ${timezone}`
}

const getIcon = (icon) => {
  let resultIcon = '';
  switch(icon){
    case 'Rain':
      resultIcon = 'rainy-1.svg';
      break;
    case 'Clouds':
      resultIcon = 'cloudy.svg';
      break;
    case 'Clear':
      resultIcon = 'day.svg';
      break;
    case 'Snow':
      resultIcon = 'snowy-1.svg';
      break;
    case 'Thunder':
      resultIcon = 'thunder.svg';
      break;
    default: 
      resultIcon = 'day.svg';
      break;  
  }
  return resultIcon
}

export {
  getCityByNameAndCountry,
  getCityByName,
  getCountryByCode,
  getCurrentTime,
  getWeatherById,
  kelvin2celsius,
  objectIsEmpty,
  getIcon,
};

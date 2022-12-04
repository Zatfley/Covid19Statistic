import { getData, getDataGlobal } from './data-source';
import 'regenerator-runtime';
import '../component/statistics-data';

const regionName = document.getElementById('region-name');
// const confirmedCount = document.getElementById('confirmed-count');
// const deathCount = document.getElementById('death-count');
const lastUpdated = document.getElementById('last-update');
const statisticsDataElement = document.createElement('statistics-data');
const statisticsCardElement = document.querySelector('statistics-card');
const changeTextValue = (country) => {
  regionName.innerText = country;
};

const showDataGlobal = async () => {
  const data = await getDataGlobal();
  statisticsDataElement.data = data;
  statisticsCardElement.appendChild(statisticsDataElement);
  // confirmedCount.innerText = data.confirmed.value.toLocaleString();
  // deathCount.innerText = data.deaths.value.toLocaleString();
  lastUpdated.innerText = new Date(data.lastUpdate);
};

const showDataCountries = async (country) => {
  const data = await getData(country);
  statisticsDataElement.data = data;
  statisticsCardElement.appendChild(statisticsDataElement);
  // confirmedCount.innerText = data.confirmed.value.toLocaleString();
  // deathCount.innerText = data.deaths.value.toLocaleString();
  lastUpdated.innerText = new Date(data.lastUpdate);
};

const handler = async (country) => {
  changeTextValue(country);

  if (country === 'Global') {
    showDataGlobal();
    return true;
  }
  showDataCountries(country);
  return true;
};

export default handler;

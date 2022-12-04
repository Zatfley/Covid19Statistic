import { getData, getDataGlobal } from './data-source';
import 'regenerator-runtime';

const regionName = document.getElementById('region-name');
const confirmedCount = document.getElementById('confirmed-count');
const deathCount = document.getElementById('death-count');
const lastUpdated = document.getElementById('last-update');

const changeTextValue = (country) => {
  regionName.innerText = country;
};

const showDataGlobal = async () => {
  confirmedCount.innerText = 'Mengambil data...';
  deathCount.innerText = 'Mengambil data...';
  const data = await getDataGlobal();
  confirmedCount.innerText = data.confirmed.value.toLocaleString();
  deathCount.innerText = data.deaths.value.toLocaleString();
  lastUpdated.innerText = new Date(data.lastUpdate);
};

const showDataCountries = async (country) => {
  confirmedCount.innerText = 'Mengambil data...';
  deathCount.innerText = 'Mengambil data...';
  const data = await getData(country);
  confirmedCount.innerText = data.confirmed.value.toLocaleString();
  deathCount.innerText = data.deaths.value.toLocaleString();
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

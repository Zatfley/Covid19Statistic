/* eslint-disable no-console */
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const regions = [
  {
    iso: null,
    name: 'Global',
  },
];

async function getCountries() {
  try {
    const res = await axios.get(`${url}/countries`);
    return await res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

const renderCountries = async () => {
  const result = await getCountries();
  const region = result.countries;
  await region.forEach((country) => {
    regions.push({
      iso: country.iso2,
      name: country.name,
    });
  });
  return regions;
};

const getData = async (country) => {
  try {
    const fetch = await axios.get(`${url}/countries/${country}`);
    return fetch.data;
  } catch (error) {
    console.log(error);
  }
  return false;
};

const getDataGlobal = async () => {
  try {
    const fetch = await axios.get(`${url}`);
    return fetch.data;
  } catch (error) {
    console.log(error);
  }
  return false;
};
export { renderCountries, getData, getDataGlobal };

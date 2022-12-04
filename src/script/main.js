/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-new */
import * as TomSelect from 'tom-select';
import 'regenerator-runtime';
import { renderCountries } from './data-source';
import handler from './handler';

const selectRegion = document.getElementById('select-region');

const main = async () => {
  // eslint-disable-next-line no-new
  const region = await renderCountries();
  if (region.length === 0) {
    return console.log('region bernilai 0');
  }
  const tomSelect = new TomSelect(selectRegion, {
    maxItems: 1,
    valueField: 'name',
    labelField: 'name',
    searchField: 'name',
    options: region,
    create: false,
    sortField: {
      field: 'text',
    },
    onChange(value) {
      handler(value);
    },
  });

  tomSelect.setValue('Global');
};

export default main;

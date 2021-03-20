import React from 'react';
import BrowserComponent from './browser-component';
import GridContent from './grid-content';
import data from '../data';

/**
   * Takes an array of objects and maps it to array of BrowerComponent components containing GridContent components
   *
   * @param {Array} array Array of objects with label, childClass and childContent key-value pairs
   * @returns {Promise} Array of BrowerComponent components containing GridContent components
   */
export const mapArrayToBrowserComp = (array) => array.map(({ label, childContent, childClass }) => (
  <BrowserComponent key={label} label={label}>
    <GridContent content={childContent} heightClass={childClass} />
  </BrowserComponent>
));

/**
   * Sorts array
   *
   * @param {Array} array Array to be sorted
   * @returns {Array} Sorted array
   */
export const sortItems = (array) => array.map(({ country }) => (country)).sort((a, b) => a.localeCompare(b));

export const getLocations = () => {
  const continentsSet = new Set();
  const continentCountryObject = new Object();

  const continents = data.map(pieceOfData => pieceOfData.continent);
  continents.forEach(continent => continentsSet.add(continent));

  data.forEach(({ continent, country, population, country_code }) => {
    if (!country.includes('total')) {
      if (continentCountryObject[continent]) {
        if (!(JSON.stringify(continentCountryObject[continent])).includes(JSON.stringify({ country, population, country_code }))) {
          continentCountryObject[continent].push({ country, population, country_code });
        }
      } else {
        continentCountryObject[continent] = [{ country, population, country_code }];
      }
    }
  });
  return continentCountryObject;
};

export const getTableData = (country) => {
  const countriesSet = new Set();
  const parsedRawData = data.map(({ country, weekly_count, year_week, indicator }) => ({
    country, weekly_count, indicator, year_week
  }));

  data.forEach(item => countriesSet.add(item.country));
  const countriesArray = Array.from(countriesSet);

  const tableData = {};;
  for (let i = 0; i < countriesArray.length; i++) {
    parsedRawData
      .filter(({ country }) => country === countriesArray[i])
      .forEach(({ weekly_count, year_week, indicator }) => {
        if (tableData[countriesArray[i]]) {
          tableData[countriesArray[i]].push({ weekly_count, year_week, indicator });
        } else {
          tableData[countriesArray[i]] = [{ weekly_count, year_week, indicator }];
        }
      });
  }
  return tableData[country];
};
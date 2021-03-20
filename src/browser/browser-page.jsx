import React, { useEffect, useState } from 'react';
import './browser-page.css';
import { mapArrayToBrowserComp } from './helpers';
import ContinentSelector from './continent-selector';
import Context from '../actions/context';
import CountryDetails from './country-details';
import Table from './table';
import CountrySelector from './country-selector';
import Input from '../components/input';

const BrowserPage = () => {
  const { Provider } = Context;
  const [selectedContinent, setSelectedContinent] = useState();
  const [locations, setLocations] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const countrySelectorDisplayClassName = selectedContinent ? "country-selector-display" : '';
  const countrySelector = {
    label: 'Countries',
    childContent: (selectedContinent ? <CountrySelector /> : <span>Select a continent</span>),
    childClass: `big-square-height country-selector ${countrySelectorDisplayClassName}`
  };

  const countryDetails = {
    label: 'Country details',
    childContent: (selectedCountry ? <CountryDetails /> : <span>Select a country</span>),
    childClass: 'small-square-height detail-height'
  };

  const table = {
    label: 'Country data',
    childContent: (selectedCountry ? <Table /> : <span>Select a country</span>),
    childClass: 'big-square-height'
  };

  const firstColumn = [countrySelector];
  const secondColumn = [countryDetails, table];
  return (
    <Provider
      value={{
        locations,
        setLocations,
        setSelectedContinent,
        setSelectedCountry,
        selectedContinent,
        selectedCountry,
        isLoading,
        setIsLoading,
        searchText
      }}
    >
      <div className="browser-page division">
        <div className="column">
          <ContinentSelector />
          <Input title="Search..." type="text" value={searchText} handleChange={setSearchText} className="input-search" />
          {mapArrayToBrowserComp(firstColumn)}
        </div>
        <div className="column">
          {mapArrayToBrowserComp(secondColumn)}
        </div>
      </div>
    </Provider>
  );
};

export default BrowserPage;

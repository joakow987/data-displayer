import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../actions/context';
import { getLocations } from './helpers';
import { sortItems } from './helpers';

const CountrySelector = () => {
  const [items, setItems] = useState([]);
  const [textDisplayed, setTextDisplayed] = useState('Select a continent');
  const { selectedContinent, selectedCountry, setSelectedCountry, searchText, locations, setLocations } = useContext(Context);

  useEffect(() => {
    setItems([]);
    if (selectedContinent) {
      const locationsObject = getLocations();
      const sortedItems = sortItems(locationsObject[selectedContinent]);
      setItems(sortedItems);
      console.log('sor', sortedItems);
    }
  }, [selectedContinent]);

  const matchItems = () => {
    const lowerSearchText = searchText.toLowerCase();
    const matchedItmes = items.filter(item => item.toLowerCase().includes(lowerSearchText));
    return matchedItmes;
  };

  const selectCountry = (e) => {
    setSelectedCountry(e.target.value);
  };

  const showContent = () => {
    return matchItems().map(item => (
      <div key={item.id} className="available-data-container">
        <label htmlFor={item.id}>
          <input
            id={item}
            type="radio"
            value={item}
            checked={selectedCountry ? selectedCountry === item : false}
            onChange={(e) => selectCountry(e)}
          />
          {item}
        </label>
      </div>
    ));
  };

  return (
    <div>
      {
        selectedContinent ? showContent() : <span>{textDisplayed}</span>
      }
    </div>);
};

CountrySelector.propTypes = {
  objectType: PropTypes.string,
  setAreObjectsFetched: PropTypes.func,
  areObjectsFetched: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

CountrySelector.defaultProps = {
  objectType: '',
  setAreObjectsFetched: null,
  areObjectsFetched: false
};

export default CountrySelector;

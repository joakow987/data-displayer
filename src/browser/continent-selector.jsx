import React, { useContext } from 'react';
import { getLocations } from './helpers';
import Context from '../actions/context';

const ContinentSelector = () => {
  const { selectedContinent, setSelectedContinent, setSelectedCountry } = useContext(Context);

  const countryContinents = getLocations();
  const continents = Object.keys(countryContinents);

  return (
    <>
      <label className="label-browser-component" htmlFor="continents"> Select a continent
          <select
          name="continents"
          id="continents"
          className="browser-page-square continent-selector"
          onChange={e => {
            setSelectedContinent(e.currentTarget.value);
            setSelectedCountry(null);
          }}
          value={selectedContinent}
        >
          <option value="">None</option>
          {[...continents].map(continent => <option value={continent}>{continent}</option>)}
        </select>
      </label>
    </>
  );
};

export default ContinentSelector;

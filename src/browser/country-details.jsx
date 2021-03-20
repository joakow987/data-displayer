import React, { useContext, useEffect } from 'react';
import './country-details.css';
import Context from '../actions/context';
import { IoIosPeople } from 'react-icons/io';
import { IoEarthOutline } from 'react-icons/io5';
import { getLocations } from '../browser/helpers';

const CountryDetails = () => {
  const {
    selectedCountry,
    selectedContinent
  } = useContext(Context);

  let countryData;
  let data = []

  if (selectedContinent) {
    countryData = getLocations()[selectedContinent].filter(({ country }) => country === selectedCountry);
    if (countryData[0]) {
      const {
        population,
        country_code
      } = countryData[0];
      console.log('population', countryData)
      data = [
        {
          label: 'Population',
          value: population
        },
        {
          label: 'Country Code',
          value: country_code
        }
      ];
    }
  }

  return (
    <div className="country-details">
      <section className="details">

        {data.map(({ label, value }) => (
          <div key={label} className="detail">
            <div>{label === 'Population' ? <IoIosPeople /> : <IoEarthOutline />}</div>
            <p>{label}</p>
            <div className="value">{value}</div>
          </div>
        ))
        }
      </section>
      <section className="title-container">
        <div className="label">Country name</div>
        <div className="title">{selectedCountry}</div>
      </section>
    </div>
  );
};

export default CountryDetails;

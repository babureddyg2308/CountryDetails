// src/components/CountryDetails.jsx
import React from 'react';

const CountryDetails = ({ country }) => {
  if (!country) {
    return <p>No country found for this currency code.</p>;
  }

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p><strong>Official Name:</strong> {country.name.official}</p>
      <p><strong>Capital:</strong> {country.capital ? country.capital.join(', ') : 'N/A'}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
      <p><strong>Currency:</strong> {Object.keys(country.currencies).join(', ')}</p>
      <img src={country.flags.png} alt={`${country.name.common} flag`} width="100" />
    </div>
  );
};

export default CountryDetails;

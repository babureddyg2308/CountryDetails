//  const CountryCard = ({ country }) => {
//     return (
//       <div>
//         <h2>{country.name.common}</h2>
//         <p>Capital: {country.capital}</p>
//         <p>Currency: {Object.values(country.currencies)[0].name}</p>
//         <p>Languages: {Object.values(country.languages).join(', ')}</p>
//         <img src={country.flags.png} alt={`${country.name.common} flag`} />
//       </div>
//     );
//   };
  
//   export default CountryCard;
import React from 'react';
// import './CountryCard.css';

function CountryCard({ country }) {
  const {
    name,
    capital,
    flags,
    population,
    region,
    languages,
    currencies
  } = country;

  return (
    <div className="country-card">
      <img src={flags.png} alt={`Flag of ${name.common}`} />
      <h2>{name.common}</h2>
      <p><strong>Official Name:</strong> {name.official}</p>
      <p><strong>Capital:</strong> {capital && capital[0]}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Population:</strong> {population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {languages && Object.values(languages).join(', ')}</p>
      <p><strong>Currency:</strong> {currencies && Object.values(currencies).map(c => `${c.name} (${c.symbol})`).join(', ')}</p>
    </div>
  );
}

export default CountryCard;

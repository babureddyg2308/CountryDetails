 const CountryCard = ({ country }) => {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Currency: {Object.values(country.currencies)[0].name}</p>
        <p>Languages: {Object.values(country.languages).join(', ')}</p>
        <img src={country.flags.png} alt={`${country.name.common} flag`} />
      </div>
    );
  };
  
  export default CountryCard;
  
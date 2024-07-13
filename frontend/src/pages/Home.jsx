import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard';
import './Home.css';

function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  return (
    <div className="country-list">
      {countries.map(country => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
}

export default Home;

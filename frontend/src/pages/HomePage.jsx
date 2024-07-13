 import { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import CountryCard from '../components/CountryCard';

const HomePage = () => {
  const [currencyCode, setCurrencyCode] = useState('');
  const [countries, setCountries] = useState([]);
  const { user } = useContext(AuthContext);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`/api/countries/${currencyCode}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Currency Code"
          value={currencyCode}
          onChange={(e) => setCurrencyCode(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

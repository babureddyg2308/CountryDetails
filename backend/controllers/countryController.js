 const axios = require('axios');

const getCountriesByCurrency = async (req, res) => {
  const { currency } = req.params;
  try {
    const { data } = await axios.get('https://restcountries.com/v3.1/all');
    const filteredCountries = data.filter(country => country.currencies && country.currencies[currency]);
    res.json(filteredCountries);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getCountriesByCurrency,
};


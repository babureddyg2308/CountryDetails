const express = require('express');
const { getCountriesByCurrency } = require('../controllers/countryController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/:currency', protect, getCountriesByCurrency);

module.exports = router;

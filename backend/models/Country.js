 
const mongoose = require('mongoose');

const countrySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    currency: { type: String, required: true },
    capital: { type: String },
    languages: [{ type: String }],
    flag: { type: String },
  },
  { timestamps: true }
);

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;

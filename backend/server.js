const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const countryRoutes = require('./routes/countryRoutes');

dotenv.config();
connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Country Details API');
  });
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/countries', countryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

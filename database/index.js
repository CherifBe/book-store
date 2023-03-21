const mongoose = require('mongoose');
require('dotenv').config();
const DATABASE_CREDENTIALS = process.env.DATABASE_CREDENTIALS;

mongoose.connect(DATABASE_CREDENTIALS)
.then((x) => console.log('Connected to Mongo!'))
.catch((err) => console.error('Error: cannot connect to mongo'));
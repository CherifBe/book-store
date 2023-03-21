const express = require('express');
const app = express();
const PORT = 3000;
const database = require('./db');

app.listen(PORT, () => {console.log(`===> server lauch on port ${PORT}`)});


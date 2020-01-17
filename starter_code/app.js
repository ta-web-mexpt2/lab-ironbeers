const express = require('express');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();




app.get('/', (req, res, next) => {
  res.status(200).json({message:"todo esta bien"})
});

app.listen(3000);

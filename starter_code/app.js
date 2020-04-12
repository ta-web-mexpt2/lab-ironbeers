const express = require('express');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();

// https://www.npmjs.com/package/punkapi-javascript-wrapper
const punkAPI = new PunkAPIWrapper();

// Home
app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'todo esta bien' });
});

app.post('/', (req, res, next) => {
  res.status(200).json({ message: 'post ok...' });
});

app.put('/', (req, res, next) => {
  res.send({ message: 'put ok ...' });
});

app.patch('/', (req, res, next) => {
  res.send({ message: 'patch ok ...' });
});

// /beers

function beersFiltered(beers, sliceFirstNotLastFive) {
  return new Promise((resolve, reason) => {
    try {
      res = beers;
      if (sliceFirstNotLastFive === true) res = beers.slice(0, 5);
      if (sliceFirstNotLastFive === false) res = beers.slice(-5);
      resolve(res);
    } catch (error) {
      reason(error);
    }
  });
}

function findAndSendBeers(res, sliceFirstNotLastFive, msgWhenFinish) {
  punkAPI.getBeers().then((beers) => {
    return beersFiltered(beers, sliceFirstNotLastFive);
  })
  .then((beers) => {
    res.send({ message: msgWhenFinish, beers });
  });
}

app.get('/beers', (req, res, next) => {
  findAndSendBeers(res, undefined, 'Beers retrieved successfully');
});

app.get('/first_five', (req, res, next) => {
  findAndSendBeers(res, true, 'First five retrieved successfully');
});

app.get('/last_five', (req, res, next) => {
  findAndSendBeers(res, false, 'Last five retrieved successfully')
});

// /random-beer
app.get('/random-beer', (req, res, next) => {
  punkAPI.getRandom((beer) => {
    
  });
});

app.listen(3000, () => {
  console.log('Listo para recibir peticiones en localhost:3000 ...');
});

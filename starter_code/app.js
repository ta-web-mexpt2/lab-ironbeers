const express = require('express');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'todo esta bien' });
});

//Iteration 1 - Config your workspace
//Iteration 2 - The Beers Route
app.get('/beers', (req, res) => {
  punkAPI
    .getBeers()
    .then((beers) => {
      res.status(200).json({
        message: 'Here you have the first 25 beers we have available: ',
        beers: beers,
      });
    })
    .catch((error) => {
      console.log('Ups! Something went wrong :c', error);
    });
});

//Iteration 3 - The first 5
app.get('/first-five', (req, res) => {
  punkAPI
    .getBeers()
    .then((beers) => {
      let firstFive = [];
      for (let i = 0; i < 5; i++) {
        firstFive.push(beers[i]);
      }
      res.status(200).json({
        message: 'First five beers: ',
        beers: firstFive,
      });
    })
    .catch((error) => {
      console.log('Ups! Something went wrong :c', error);
    });
});

//Iteration 4 - The last 5
app.get('/last-five', (req, res) => {
  punkAPI
    .getBeers()
    .then((beers) => {
      let lastFive = [];
      for (let i = beers.length - 5; i < beers.length; i++) {
        lastFive.push(beers[i]);
      }
      res.status(200).json({
        message: 'Last 5 beers: ',
        beers: lastFive,
      });
    })
    .catch((error) => {
      console.log('Ups! Something went wrong :c', error);
    });
});

//Iteration 5 - Random Beer
app.get('/random-beers', (req, res) => {
  punkAPI
    .getRandom()
    .then((beers) => {
      res.status(200).json({
        message: 'A beer picked randomly: ',
        beers: beers,
      });
    })
    .catch((error) => {
      console.log('Ups! Something went wrong :c', error);
    });
});

app.listen(3000, () => {
  console.log('App running in portal 3000');
});

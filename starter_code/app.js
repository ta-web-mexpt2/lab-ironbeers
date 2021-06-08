const express = require('express');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.get('/', (req, res, next) => {
  res.status(200).json({message:"todo esta bien"})
});

//Iteration 2
app.get('/beers', (req, res, next) => {
  punkAPI
  .getBeers()
  .then(beers => {res.status(200).json({beers})})
  .catch(error => {
    console.log(error);
  });
});

//Iteration 3
app.get('/first_five', (req, res, next) => {
  punkAPI
  .getBeers()
  .then(beers => {res.status(200).json(beers.slice(0,5))})
  .catch(error => {
    console.log(error);
  });
});
app.listen(3000);

//Iteration 4
app.get('/last_five', (req, res, next) => {
  punkAPI
  .getBeers()
  .then(beers => {res.status(200).json(beers.slice(beers.length-5,beers.length))})
  .catch(error => {
    console.log(error);
  });
});
app.listen(3000);

//Iteration 5
app.get('/random_beer', (req, res, next) => {
  punkAPI
  .getRandom()
  .then(randomBeer => {res.status(200).json(randomBeer)})
  .catch(error => {
    console.log(error);
  });
});
app.listen(3000);

//Iteration 6
app.get('/random_beer', (req, res, next) => {
  punkAPI
  .getRandom()
  .then(randomBeer => {res.status(200).json(randomBeer)})
  .catch(error => {
    console.log(error);
  });
});
app.listen(3000);

//Iteration 7
app.get('/filter_date', (req, res, next) => {
  punkAPI
  .getBeers({'brewed_before':'01-2010'})
  .then(beersBeforeDate => {res.status(200).json(beersBeforeDate)})
  .catch(error => {
    console.log(error);
  });
});
app.listen(3000);
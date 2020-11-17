const express = require('express');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.get('/', (req, res, next) => {
  res.status(200).json({message:"todo esta bien"});
});

//Iteration 2
app.get('/beers', (req, res, next) => {
  punkAPI.getBeers()
  .then(beers => {
    res.status(200).json(beers);
  })
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  })
});

//Iteration 3 & 4
//Use /beers/first?number=20 to get the first 20 beers, /beers/last?number=3 to get the last 3 beers, etc.
app.get('/beers/:order', (req, res, next) => {
  punkAPI.getBeers()
  .then(beers => {
    let newBeers = [];
    let number = (req.query.number !== undefined) ? parseInt(req.query.number) : 5;
    number = (number > 25) ? 25 : number;

    if (req.params.order === 'first') {
      newBeers = beers.slice(0, number);
    } else if (req.params.order === 'last') {
      newBeers = beers.slice(Math.max(beers.length - number, 0));
    }
    res.status(200).json(newBeers);
  })
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  })
});

//Iteration 5
app.get('/random-beer', (req, res, next) => {
  punkAPI.getRandom()
  .then(randomBeer => {
    res.status(200).json(randomBeer);
  })
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  })
});

//Bonus
app.get('/beers/filter_date', (req, res, next) => {
  punkAPI.getBeers({'brewed_after': 12-2010})
  .then(beers => {
    res.status(200).json(beers);
  })
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  })
});

app.listen(3000, () => console.log('App listening on port 3000!'));
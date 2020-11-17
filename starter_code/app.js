const express = require('express');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.get('/', (req, res, next) => {
  res.status(200).json({message:"todo esta bien"})
});

app.get('/beers', (req, res, next) => {
  punkAPI
  .getBeers()
  .then(beers => {
    res.json(beers);
  })
  .catch(error => {
    console.log(error);
  });

});

app.get('/first_five', (req, res, next) => {
  punkAPI
  .getBeers()
  .then(beers => {
    res.json(beers.slice(0,5));
  })
  .catch(error => {
    console.log(error);
  });

});

app.get('/last_five', (req, res, next) => {
  punkAPI
  .getBeers()
  .then(beers => {
    res.json(beers.slice(beers.length-5,beers.length));
  })
  .catch(error => {
    console.log(error);
  });

});

app.get('/random-beer', (req, res, next) => {
  punkAPI
  .getRandom()
  .then(beer => {
    res.json(beer);
  })
  .catch(error => {
    console.log(error);
  });

});

app.get('/filter_date', (req, res, next) => {
  punkAPI
  .getBeers()
  .then(beers => {
    res.json(beers.filter(beer=>{
      let beerYear = Number(beer.first_brewed.split("/")[1]);
      return beerYear < 2010;
    }));
  })
  .catch(error => {
    console.log(error);
  });

});

app.listen(3000);
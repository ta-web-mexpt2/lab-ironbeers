const express = require('express');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();




app.get('/', (req, res, next) => {
  res.status(200).json({message:"todo esta bien"})
});
app.get('/beers', (req,res,next) => {
  punkAPI
    .getBeers()
    .then(beers => {res.json(beers)})
    .catch(error => {
      console.log(error);
    });

})

app.get('/beers/first_five', (req,res,next) => {
  punkAPI
    .getBeers()
    .then(beers => {res.json(beers.slice(0, 5))})
    .catch(error => {
      console.log(error);
    });
})

app.get('/beers/last_five', (req,res,next) => {
  punkAPI
    .getBeers()
    .then(beers => {res.json(beers.slice(Math.max(beers.length - 5, 0)))})
    .catch(error => {
      console.log(error);
    });
})

app.get('/beers/random_beer', (req,res,next) => {
  punkAPI
    .getRandom()
    .then(beers => {res.json(beers)})
    .catch(error => {
      console.log(error);
    });
})

app.get('/beers/filter_date', (req,res,next) => {
  punkAPI
    .getBeers()
    .then(beers => {res.json(beers.filter(beer => {
      var year = beer.first_brewed.slice(3, 7)
      return Number(year) < 2010
    }))})
    .catch(error => {
      console.log(error);
    });

})

app.listen(3000);

const express = require('express');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.get('/beers', (req,res, next) => {
  punkAPI.getBeers()
    .then(beers => {res.json(beers)})
    .catch(err => res.status(400).json({msg:`Error: ${err}`}))
})

app.get('/first_five', (req,res,next) =>{
  punkAPI.getBeers()
    .then(first5 => res.json(first5.slice(0,5)))
    .catch(err => res.status(400).json({msg:`Error: ${err}`}))
})

app.get('/last_five', (req,res,next) =>{
  punkAPI.getBeers()
    .then(last5 => res.json(last5.slice(last5.length - 5)))
    .catch(err => res.status(400).json({msg:`Error: ${err}`}))
})

app.get('/random-beer', (req,res,next) =>{
  punkAPI.getRandom()
    .then(random => {
//      res.render('randomBeer.hbs');
      res.json(random)
    })
    .catch(err => res.status(400).json({msg:`Error: ${err}`}))
})

app.get('/filter_date', (req,res,next) => {
  punkAPI.getBeers()
    .then(beers => res.json(beers.filter(e => parseInt(e.first_brewed.split("/")[1]) <= 2010)))
    .catch(err => res.status(400).json({msg:`Error: ${err}`}))
})


app.get('/', (req, res, next) => {
  res.status(200).json({message:"todo esta bien"})
});

app.listen(3000);

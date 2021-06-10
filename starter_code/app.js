const express = require('express');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

//Iteration 1 - Config your workspace - DONE

//Iteration 2 - The Beers Route - DONE

app.get('/', (req, res, next) => {
  res.status(200).json({message:"todo esta bien"})
});

app.get('/beers', (req, res, next) => {
  punkAPI.getBeers()
  .then(beers => {res.status(200).json({beers})})
  .catch(error => console.log(error))
});

//Iteration 3 - The first 5 - DONE
app.get('/beers/first_five', (req, res, next)=>{
  punkAPI.getBeers()
  .then(beers => {res.status(200).json(beers.slice(0,5))})
  .catch(error => console.log(error))
})

//Iteration 4 - The last 5
app.get('/beers/last_five', (req, res, next) =>{
  punkAPI.getBeers()
  .then(beers => {res.status(200).json(beers.slice(-1,-5))})
  .catch(error => console.log(error))
})

app.get('/random-beers', (req, res, next) => {

});

app.listen(3000, () => console.log('The server is running'));

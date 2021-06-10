const express = require('express');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

//Iteration 1 - Config your workspace - DONE
//IMSONIA CONFIGURED SUCCESSFULLY

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
});

//Iteration 4 - The last 5 - DONE
app.get('/beers/last_five', (req, res, next) =>{
  punkAPI.getBeers()
  .then(beers => {res.status(200).json(beers.slice(-6))})
  .catch(error => console.log(error))
});

//Iteration 5 - Random Beer - DONE
app.get('/random-beers', (req, res, next) => {
  punkAPI.getRandom()
  .then(beers => {res.status(200).json({beers})})
  .catch(error => console.log(error))
});

//BONUS- DONE
app.get('/beers/filter_date', (req, res, next) => {
  punkAPI.getBeers({'brewed_before':'01-2010'}) //https://github.com/brettdewoody/punkapi-javascript-wrapper#readme
  .then(beers => {res.status(200).json({beers})})
  .catch(error => console.log(error))
});

app.listen(3000, () => console.log('The server is running'));

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
  punkAPI.getBeers()
    .then(beers => {res.json(beers)})
    .catch(error => res.status(400).json({msg:`Error: ${error}`}))
});
//Iteration 3
app.get('/first_five', (req, res, next) => {
  punkAPI.getBeers()
    .then(first5Beers => {
      let first5 = []
      for (let i=0; i<5; i++){
        first5.push(first5Beers[i])
      }
      res.json(first5)})
    .catch(error => res.status(400).json({msg:`Error: ${error}`}))
});
//Iteration 4
app.get('/last_five', (req, res, next) => {
  punkAPI.getBeers()
    .then(last5Beers => {
      let last5 = []
      for (let i=last5Beers.length - 1; i>last5Beers.length-6; i--){
        last5.push(last5Beers[i])
      }
      res.json(last5)})
    .catch(error => res.status(400).json({msg:`Error: ${error}`}))
});

//Iteration 5
app.get('/random-beers', (req, res, next) => {
  punkAPI.getRandom()
    .then(rand => {res.json(rand)})
    .catch(error => res.status(400).json({msg:`Error: ${error}`}))
});

//Bonus
app.get('/filter_date', (req, res, next) => {
  punkAPI.getBeers()
    .then(filteredDate => {
      let filtered = []
      let monthYear
      filteredDate.forEach(element => {
        monthYear = element.first_brewed.split("/") 
        if(parseInt(monthYear[1]) < 2010){
          filtered.push(element)
        }
      })
      res.json(filtered)})
    .catch(error => res.status(400).json({msg:`Error: ${error}`}))
    })

app.listen(3000);
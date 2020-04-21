const express = require('express');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'todo esta bien' });
});

//Iteration 2 - The Beers Route
app.get('/beers', (req, res) => {
  punkAPI.getBeers()
    .then((beers) => {
      res.status(200).json({ message: "Beer list has been called!", beers });
    })
    .catch((error) => {
      console.log(`An error has occured:`, error);
    });
});

//Iteration 3 - The first 5
app.get('/beers/first_five', (req, res) => {
  punkAPI.getBeers()
    .then((beers) => {
      let firstFive = [];
      for (let i = 0; i < 5; i++) {
        firstFive.push(beers[i]);
      }
      res.status(200).json({ message: "First 5 beers have been called!", firstFive });
    })
    .catch((error) => {
      console.log(`An error has occured:`, error);
    });
});

//Iteration 4 - The last 5
app.get('/beers/last_five', (req, res) => {
  punkAPI.getBeers()
    .then((beers) => {
      let lastFive = [];
      for (let i = beers.length - 5; i < beers.length; i++) {
        lastFive.push(beers[i]);
      }
      res.status(200).json({ message: "Last 5 beers have been called!", lastFive });
    })
    .catch((error) => {
      console.log(`An error has occured:`, error);
    });
});

//Iteration 5 - Random Beer
app.get('/beers/random-beer', (req, res) => {
  punkAPI.getRandom()
    .then((beer) => {
      res.status(200).json({ message: "A random has been called!", beer });
    })
    .catch((error) => {
      console.log(`An error has occured:`, error);
    });
});

//Bonus Exercise
app.get('/beers/filter_date', (req, res) => {
  punkAPI.getBeers({ 'brewed_before': '01-2010' })
    .then((beers) => {
      res.status(200).json({ message: "Beer brewed before 2010 have been called!", beers });
    })
    .catch((error) => {
      console.log(`An error has occured:`, error);
    });
});

app.listen(3000, () => {
  console.log('App is running on portal 3000!');
});

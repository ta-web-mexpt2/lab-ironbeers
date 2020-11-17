const express = require('express');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();


app.get("/beers",(req, res, next) => {

  punkAPI.getRandom()
  .then(randomBeer => {
      console.log("Beer", randomBeer)
      res.json(randomBeer)
  })
  .catch(err => {
      console.log("This is the error: ", err)
      res.status(400).json(err)
  })

})
app.get("/beers/:id",(req, res, next) => {
  let {id} = req.params
  punkAPI.getBeer(id)
  .then(randomBeer => {
      console.log("Beer",randomBeer)
      res.json(randomBeer)
  })
  .catch(err => {
      console.log("This is the error: ", err)
      res.status(400).json(err)
  })
})

app.get("/first_five",(req, res, next) => {
  let {id} = req.params
  punkAPI.getBeer(id)
  .then(randomBeer => {
      console.log("First Five Beers", randomBeer)
      res.json(randomBeer)
  })
  .catch(err => {
      console.log("This is the error: ", err)
      res.status(400).json(err)
  })
})

app.get("/last_five",(req, res, next) => {
  let {id} = req.params
  punkAPI.getBeer(id)
  .then(randomBeer => {
      console.log("Last Five Beers", randomBeer)
      res.json(randomBeer)
  })
  .catch(err => {
      console.log("This is the error: ", err)
      res.status(400).json(err)
  })
})

app.get('/', (req, res, next) => {
  res.status(200).json({message:"todo esta bien"})
});

app.listen(3000);

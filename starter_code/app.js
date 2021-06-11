const express = require('express');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();


app.get('/', (req, res, next) => {
  res.status(200).json({message:"todo esta bien"})
});


app.get('/beers', (req, res, next) => {
  punkAPI.getBeers() //metodo para traer todas las cervezas
  .then(beers=>{
    res.status(201).json({beers})
  })
  .catch(error =>{
    res.status(400).json({msj:"Algo esta mal", error})
  })
});


app.get('/first_five', (req, res, next) => {
  punkAPI.getBeers()
  .then(beers=>{
    let fiveBeers = beers.slice(0,4) //metodo para traer las primeras 5
    console.log(`si rifo: ${fiveBeers}`)
    res.status(201).json({fiveBeers})
  })
  .catch(error =>{
    res.status(400).json({msj:"Algo esta mal", error})
  })
});

app.get('/last_five', (req, res, next) => {
  punkAPI.getBeers()
  .then(beers=>{
    let lastFive = beers.slice(-5) //metodo para traer 5
    console.log (`Seran 5?: ${lastFive}`)
    res.status(201).json({lastFive})
  })
  .catch(error =>{
    res.status(400).json({msj:"Algo esta mal", error})
  })
});


app.get('/random-beer', (req, res, next) => {
  punkAPI.getRandom()
  .then(beers=>{
    res.status(201).json({beers})
  })
  .catch(error =>{
    res.status(400).json({msj:"Algo esta mal", error})
  })
});


app.get('/filter_date', (req, res, next) => {
  punkAPI.getBeers()
  .then((beers)=>{
    let beersFilter = beers.filter((item,index)=>{
      if(dateFilter[1] < 2007){
        return item
      }
    })
    res.status(201).json({beers})
  })
  .catch(error =>{
    res.status(400).json({msj:"Algo esta mal", error})
  })
});

app.listen(3000,console.log("ya estufas"));

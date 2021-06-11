const express = require('express');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();


app.get('/', (req, res, next) => {
  res.status(200).json({message:"Funcionando correctamente"})
});


app.get('/beers', (req, res, next) => {
  punkAPI.getBeers()
  .then(beers=>{
    res.status(200).json({beers})
  })
  .catch(error =>{
    res.status(400).json({msj:"Se produjo un error", error})
  })
});

//iteracion 3
app.get('/first_five', (req, res, next) => {
  punkAPI.getBeers()
  .then(beers=>{
    let fiveBeers = beers.slice(0,5)
    console.log(`Mostrando las primeras 5: ${fiveBeers}`)
    res.status(201).json({fiveBeers})
  })
  .catch(error =>{
    res.status(400).json({msj:"Se produjo un error", error})
  })
});

//iteracion 4
app.get('/last_five', (req, res, next) => {
  punkAPI.getBeers()
  .then(beers=>{
    let lastFive = beers.slice(-5)
    console.log (`Tenemos las ultimas 5: ${lastFive}`)
    res.status(201).json({lastFive})
  })
  .catch(error =>{
    res.status(400).json({msj:"Se produjo un error", error})
  })
});

//iteracion 5
app.get('/random-beer', (req, res, next) => {
  punkAPI.getRandom()
  .then(beers=>{
    console.log(`Cerveza aleatoria: ${beers}`)
    res.status(201).json({beers})
  })
  .catch(error =>{
    res.status(400).json({msj:"Se produjo un error", error})
  })
});

//bonus

app.get('/filter_date', (req, res) => {
  punkAPI.getBeers()
  .then((beers)=>{
    let filterBeer = beers.filter((item,index)=>{
      let dateFilter = item.first_brewed.split("/") [1]//de divide la fecha y nos quedamos con el indice 1 que es el a;o
      if(dateFilter[1] <2010){
        return item
      }
    })

    console.log(`Cerveza aleatoria: ${filterBeer}`)
    res.status(201).json({filterBeer})
  })
  .catch(error =>{
    res.status(400).json({msj:"Se produjo un error", error})
  })
});

app.listen(3000,console.log("El servidor esta corriendo"));
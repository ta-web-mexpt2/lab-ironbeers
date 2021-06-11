const express = require('express');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();




app.get('/', (req, res, next) => {
  res.status(200).json({message:"todo esta bien"})
});


// ITERACIÓN 2

app.get("/beers",(req,res,next)=>{
  punkAPI.getBeers()
  .then((beers)=>{
    res.status(200).json(beers)
  })
  .catch(error=>{
    res.status(400).json({msj:"algo salio mal", error})
  })
})

//ITERACIÓN 3

app.get("/first_five",(req,res,next)=>{

  punkAPI.getBeers()
  .then((beers)=>{
    var items = beers.slice(0,5)
    res.status(200).json(beers)
  })
  .catch(error=>{
    res.status(400).json({msj:"algo salio mal", error})
  })
})

//ITERACIÓN 4

app.get("/last_five",(req,res,next)=>{

  punkAPI.getBeers()
  .then((beers)=>{
    var items = beers.slice(-5)
    res.status(200).json(beers)
  })
  .catch(error=>{
    res.status(400).json({msj:"algo salio mal", error})
  })
})

//ITERACION 5
app.get("/random_beer",(req,res,next)=>{

  punkAPI.getRandom()
  .then((random)=>{
    res.status(200).json(random)
  })
  .catch(error=>{
    res.status(400).json({msj:"algo salio mal", error})
  })
})


//BONUS

app.get("/filter_date",(req,res,next)=>{

  punkAPI.getBeers()
  .then((random)=>{

    let beersFilter = beers.filter((item,index)=>{
      let datefilter =item.first_brewed.split("/");
      if(datefilter[1]<2010){
      return item;}
    })
    res.status(200).json(beers)
  })
  .catch(error=>{
    res.status(400).json({msj:"algo salio mal", error})
  })
})

app.listen(3000);

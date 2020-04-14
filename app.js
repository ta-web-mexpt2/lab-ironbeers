const express = require('express');
const app = express();
const path = require('path');
// modulo para instalar paths para generar rutas hacia archivos o carpetas
// en el proyecto

const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();


const bodyParser = require ("body-parser")
app.use(bodyParser.json() );

// HOME YA ESTA CONECTADA
app.get('/',       (req, res, next) => {
  console.log("hola")
  res.status(200).json( {message: "home ya esta conectado" , 
    }
  )
  //   .then message:"todo esta bien"}    
  //   .catch err : "error"
  }   );

///////////////////////////////////////////////////////



// BEERS YA ESTÁ CONECTADA
app.get('/beers',        (req, res) => {
  console.log("hola2");
  punkAPI
    .getBeers()
    .then(beersFromApi => res.render('beers', {beersFromApi}))
    .catch(error => console.log(error));
  
// así como está da objeto vació
//res.status(200).json(punkAPI.getBeers() )
  
      }) ;

// hasta aqui quede, no entiendo como evitar que de obj vacio






//RANDOM-BEER YA ESTA CONECTADA
app.get('/random-beers', (req, res) => {
  console.log("hola3")

  res.status(200).json(   
    {message:"random-beers esta corriendo"}    )}   );




app.listen(3000, ()=> console.log(" App corriendo"));

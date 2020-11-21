const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log(req);
  res.send(
    "Estás en la Home Page"
  )
});

//params
app.get("/beers",(req,res,next)=>{
  punkAPI.getRandom()
  .then(randomBeer => {
    console.log("chela", randomBeer)
    res.json(randomBeer)
  })
  .catch(err=> {
    console.log("el error",err)
    res.status(400).json(err)
  })
})
app.get("/beers/:id",(req,res,next)=>{
  let {id} =req.params
  punkAPI.getBeer(id)
  .then(randomBeer=>{
    console.log("chela",randomBeer)
    res.json(randomBeer)
  })
  .catch(err=>{
    console.log("El error",err)
    res.status(400).json(err)
  })
})
app.listen(3000, () => console.log('App listening on port 3000!'));

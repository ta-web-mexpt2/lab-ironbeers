const express = require('express');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const exphbr = require('express-handlebars');

const app = express();

// handlebars setup
// https://github.com/ericf/express-handlebars/issues/195
app.engine(
  'handlebars',
  exphbr({
    defaultLayout: 'index',
    layoutsDir: path.join(__dirname, 'views'),
  })
);
app.set('view engine', 'handlebars');
//app.set('views', './views');

// https://www.npmjs.com/package/punkapi-javascript-wrapper
const punkAPI = new PunkAPIWrapper();

// Home
app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'todo esta bien' });
});

app.post('/', (req, res, next) => {
  res.status(200).json({ message: 'post ok...' });
});

app.put('/', (req, res, next) => {
  res.send({ message: 'put ok ...' });
});

app.patch('/', (req, res, next) => {
  res.send({ message: 'patch ok ...' });
});

// /beers

function beersFiltered(beers, sliceFirstNotLastFive) {
  return new Promise((resolve, reason) => {
    try {
      res = beers;
      if (sliceFirstNotLastFive === true) res = beers.slice(0, 5);
      if (sliceFirstNotLastFive === false) res = beers.slice(-5);
      resolve(res);
    } catch (error) {
      reason(error);
    }
  });
}

function findAndSendBeers(res, sliceFirstNotLastFive, msgWhenFinish) {
  punkAPI
    .getBeers()
    .then((beers) => {
      return beersFiltered(beers, sliceFirstNotLastFive);
    })
    .then((beers) => {
      res.send({ message: msgWhenFinish, beers });
    });
}

app.get('/beers', (req, res, next) => {
  findAndSendBeers(res, undefined, 'Beers retrieved successfully');
});

app.get('/first_five', (req, res, next) => {
  findAndSendBeers(res, true, 'First five retrieved successfully');
});

app.get('/last_five', (req, res, next) => {
  findAndSendBeers(res, false, 'Last five retrieved successfully');
});

// /random-beer
app.get('/random-beer', (req, res, next) => {
  punkAPI
    .getRandom((beer) => {
      return new Promise((resolve, reason) => {
        resolve(beer);
      });
    })
    .then((beer) => {
      console.log(beer);
      // beer is an array
      res.render('index', { ...beer[0] });
    })
    .catch((reason) => {
      console.log(`Error: ${reason}`);
    });
});

//filter_date
// app.get('/filter_date', (req, res) => {
//   punkAPI.getBeers({brewed_before: '01-2010'})
//   .then((beers) => {
//     return new Promise((resolve, reason) => {
//       resolve(beers);
//     });
//   }).then((beers) => {
//     res.send(beers);
//   });
// });

app.get('/filter_date', (req, res) => {
  punkAPI
    .getBeers()
    .then((beers) => {
      return new Promise((resolve, reason) => {
        resolve(beers);
      });
    })
    .then((beers) => {
      res.send(
        // format of first_brewed: mm/yyyy
        beers.filter((beer) => parseInt(beer.first_brewed.split('/')[1]) < 2010)
      );
    })
    .catch((reason) => {
      console.log(`Error: ${reason}`);
    });
});

app.listen(3000, () => {
  console.log('Ready for requests on localhost:3000 ...');
});

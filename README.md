![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# IronBeers

## Introduction

In this lab you will create a web app where the user will be able to see a list of beers or check one randomly. For the exercise, we will work with the [PunkAPI](https://www.npmjs.com/package/punkapi-javascript-wrapper) database, through it's NPM Package. The package has some methods that retrieve beers with some info about them and fits perfect for our example.

## Requirements

- Fork this repo
- Then clone this repo.

## Submission

- Upon completion, run the following commands

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.

## Instructions



## Iteration 1 - Config your workspace

On the `app.js` file you should include the routes or `end points` to reach every one of your methods to use our web verbs `POST GET etc...`  and create in **insomnia or postman** your work tree with all your methods to any of your end-points 

The **insomnia or postman** create your workspace and must have three elements:

- _Home_. ----> Should point to `/`.
- _Beers_. ----> Should point to `/beers`.
- _Random Beer_. ----> Should point to `/random-beers`.

![image](https://res.cloudinary.com/drakarzamael/image/upload/v1579233962/ironlabs/insomnia.jpg)

## Iteration 2 - The Beers Route

Create a `/beers` route inside the `app.js` file.

Inside the `/beers` route, call to the `getBeers()` method of our **PunkAPI** package. The package will return you an array of 25 beers, and you should return  `JSON` with status code and some nice message and you will be able to see in your workspace

```javascript
punkAPI
  .getBeers()
  .then(beers => {})
  .catch(error => {
    console.log(error);
  });
```

Remember you should send the `JSON` after getting the `beers` from our package. That means, inside the `then`.

## Iteration 3 - The first 5 

On the `beers` folder on your workspace create another route  `/first_five`, call the  **all beers method** from the iteration 2 and get back only the firts 5 beers.

## Iteration 4 - The last 5 

On the `beers` folder on your workspace create another route  `/last_five`, call the  **all beers method** from the iteration 2 and get back only the last 5 beers.


## Iteration 5 - Random Beer

Finally, let's create our `/random-beer` route. Inside our route you should call the `getRandom()` method of the PunkAPI package and after receiving the info, render the `randomBeer.hbs` file and pass the data of the beer.

```javascript
punkAPI
  .getRandom()
  .then(beers => {
    // ...
  })
  .catch(error => {
    console.log(error);
  });
```

## Bonus Exercise

On the `beers` folder on your workspace create another route  `/filter_date`, call the  **all beers method** from the iteration 2 and get back only the beers `first_brewed` when the year is smaller than 2010 remember to put some nice message on the json when return to you on your workspace.




Happy Coding! :heart:

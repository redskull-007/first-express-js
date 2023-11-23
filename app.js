const express = require('express');
const { send } = require('process');

const app = express();

app.use((req , res, next) => {
  console.log('In the middleware!');
    next();
});

app.use((req , res, next) => {
  console.log('In another middleware!');
 res.send('<h1>hello from express</h1>');
});

app.listen(3000);
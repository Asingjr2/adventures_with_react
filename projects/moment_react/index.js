const moment = require('moment');
const express = require('express');

const app = new express();

app.get('/', (req, res) => {
  let time = moment().format('dddd');
  let time2 = moment().format('YYYY');
  let time3 = moment().format('MMM Do YY');

  let date = moment().calendar();
  let datetime = moment().format('LLLL');
  let message = `hello world. Time now ${time}\n 
  Time then ${time2}\n 
  Time later ${time3}\n
  Date now ${date}\n
  Datetime now ${datetime}\n
  `;

  res.send(message);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

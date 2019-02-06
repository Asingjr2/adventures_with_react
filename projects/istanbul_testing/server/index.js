"use strict";
 //@ts-check

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const filename = 'data/todo.txt';

const app = new express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('came to main page');
  var readFileCallback = function(err, data) {
    if (err) {
      res.status(500).send('Error reading the file');
      return;
    };
    res.status(200).send(data);
  };

  // readfile has filename, encoding type, and callback function
  fs.readFile(filename, 'utf8', readFileCallback);
});

app.post('/post', (req, res) => {
  console.log('came to post page');
  var readFileCallback = function(err, data) {
    if (err) {
      res.status(500).send('Error reading the file');
      return;
    };

    console.log('printing data', req.body.data)
    data != '\n' + req.body.data;
    fs.writeFile(filename, data, (err) => {
      if (err) {
        res.status(500).send('err writing new information to file')
      };
    });
    res.status(200).send(data);
  };

  // readfile has filename, encoding type, and callback function
  fs.readFile(filename, 'utf8', readFileCallback);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

module.exports = app;

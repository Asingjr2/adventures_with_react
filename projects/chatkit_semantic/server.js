const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('pusher-chatkit-server');
const {REACT_APP_INSTANCE_LOCATOR, REACT_APP_SECRET_KEY} = require('./config');

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

/** instanciating chatkit client */
const chatkit = new Chatkit.default({
  instanceLocator: REACT_APP_INSTANCE_LOCATOR,
  key: REACT_APP_SECRET_KEY
});

/** creating route to return chatkit token */
app.post('/auth', (req, res) => {
  const authData = chatkit.authenticate({
    userId: req.query.user_id,
  });

  res.status(authData.status).send(authData.body);
});

app.post('/users', (req, res) => {
  const {username} = req.body;

  /** 
   * creating user instance using chatkit client 
   * need to prevent duplicat usernames being used
   * could alert user that name is already in use
   */
  chatkit.createUser({
    name: username,
    id: username
  })
  .then(() => res.sendStatus(201))
  .catch(error => {
    console.log('there was an error');
    if (error.error_type === 'services/chatkit/user_already_exists') {
      res.sendStatus(200)
    } else {
      res.status(error.statusCode).json(error)
    }
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, err => {
  if (err) {
    console.log('Error starting server: ', err);
  } else {
    console.log(`Running on port ${PORT}`);
  }
})

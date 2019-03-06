const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit = require('pusher-chatkit-server');
const {REACT_APP_INSTANCE_LOCATOR, REACT_APP_SECRET_KEY} = require('./config');


// instanciating chatkit instance and then we create a user
const chatkit = new Chatkit.default({
  instanceLocator: REACT_APP_INSTANCE_LOCATOR,
  key: REACT_APP_SECRET_KEY
})

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/auth', (req, res) => {
  const authData = chatkit.authenticate({
    userId: req.query.user_id,
  });
  res.status(authData.status).send(authData.body);
});

app.post('/users', (req, res) => {
  const {username} = req.body;
  console.log('username is', username);

  // creating a user using chatkit instance
  // weak error handling expecially for user with duplicate names.  could make more elaborate or add numbers to the name
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
})

const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})

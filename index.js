const express = require('express');
const bodyParser = require('body-parser');

// MIDDLEWARES
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');
const validateName = require('./middlewares/validateName');
const validateAge = require('./middlewares/validateAge');
const validateTalk = require('./middlewares/validateTalk');
const validateWatchedAt = require('./middlewares/validateWatchedAt');
const validateRate = require('./middlewares/validateRate');
const validateToken = require('./middlewares/validateToken');
const registerTalker = require('./middlewares/registerTalker');
const editTalker = require('./middlewares/editTalker');
const deleteTalker = require('./middlewares/deleteTalker');
const searchTalker = require('./middlewares/searchTalker');
const findTalkerById = require('./middlewares/findTalkerById');
const getTalkers = require('./middlewares/getTalkers');

// HELPERS
const generateLoginToken = require('./helpers/generateLoginToken');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get(
  '/talker',
  getTalkers,
);

app.get(
  '/talker/search',
  validateToken,
  searchTalker,
);

app.get(
  '/talker/:id',
  findTalkerById,
);

app.post(
  '/login',
  validateEmail,
  validatePassword,
  generateLoginToken,
);

app.post(
  '/talker', 
  validateToken, 
  validateName, 
  validateAge, 
  validateTalk, 
  validateWatchedAt, 
  validateRate,
  registerTalker,
);

app.put(
  '/talker/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  editTalker,
);

app.delete(
  '/talker/:id',
  validateToken,
  deleteTalker,
);

app.listen(PORT, () => {
  console.log('Online');
});

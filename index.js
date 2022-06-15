const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

// MIDDLEWARES
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');
const generateLoginToken = require('./generateLoginToken');
const validateName = require('./middlewares/validateName');
const validateAge = require('./middlewares/validateAge');
const validateTalk = require('./middlewares/validateTalk');
const validateWatchedAt = require('./middlewares/validateWatchedAt');
const validateRate = require('./middlewares/validateRate');
const validateToken = require('./middlewares/validateToken');
const registerTalker = require('./middlewares/registerTalker');

// HELPERS
const readFile = require('./helpers/readFile');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const BAD_REQUEST = 400;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get(
  '/talker',
  rescue(async (_req, res) => {
    const talkers = await readFile('./talker.json');
    
    if (!talkers) return res.status(HTTP_OK_STATUS).json([]);
    return res.status(HTTP_OK_STATUS).json(talkers);
  }),
);

app.get(
  '/talker/:id',
  rescue(async (req, res) => {
    const talkers = await readFile('./talker.json');
    const { id } = req.params;
    const foundTalker = talkers.find((talker) => talker.id === Number(id));
    
    if (!foundTalker) {
      return res.status(BAD_REQUEST).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(HTTP_OK_STATUS).json(foundTalker);
  }),
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

app.listen(PORT, () => {
  console.log('Online');
});

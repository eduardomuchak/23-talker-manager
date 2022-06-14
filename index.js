const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const rescue = require('express-rescue');
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');
const tokenGenerator = require('./middlewares/tokenGenerator');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const readFile = async (fileName) => {
  const data = await fs.readFile(fileName, 'utf-8');
  return JSON.parse(data);
};

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
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).json(foundTalker);
  }),
);

app.post('/login', validateEmail, validatePassword, tokenGenerator);

app.listen(PORT, () => {
  console.log('Online');
});

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const rescue = require('express-rescue');

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

app.listen(PORT, () => {
  console.log('Online');
});

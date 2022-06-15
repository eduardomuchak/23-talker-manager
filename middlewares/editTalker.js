const readFile = require('../helpers/readFile');
const writeTalker = require('../helpers/writeTalker');

const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;

const editTalker = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const talkers = await readFile('./talker.json');
  const talkerIndex = talkers.findIndex((talker) => talker.id === Number(id));

  if (talkerIndex === -1) {
    return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'O Id informado não existe!' });
  }

  talkers[talkerIndex] = { ...talkers[talkerIndex], name, age, talk: { watchedAt, rate } };
  await writeTalker(talkers);

  res.status(HTTP_OK_STATUS).send(talkers[talkerIndex]);
};

module.exports = editTalker;
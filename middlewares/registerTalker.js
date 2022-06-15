const readFile = require('../helpers/readFile');
const writeTalker = require('../helpers/writeTalker');

const HTTP_CREATED_STATUS = 201;

const registerTalker = async (req, res) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const talkers = await readFile('./talker.json');
  const newTalker = {
    name,
    age,
    id: (talkers.length + 1),
    talk: {
      watchedAt,
      rate,
    },
  };
  talkers.push(newTalker);
  writeTalker(talkers);
  return res.status(HTTP_CREATED_STATUS).send(newTalker);
};

module.exports = registerTalker;
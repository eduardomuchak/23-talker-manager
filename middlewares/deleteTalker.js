const readFile = require('../helpers/readFile');
const writeTalker = require('../helpers/writeTalker');

const HTTP_NO_CONTENT_STATUS = 204;
const HTTP_NOT_FOUND_STATUS = 404;

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const talkers = await readFile('./talker.json');
  const talkerIndex = talkers.findIndex((talker) => talker.id === Number(id));

  if (talkerIndex === -1) {
    return res.status(HTTP_NOT_FOUND_STATUS).json(
      { message: 'O id informado não foi encontrado!' },
    );
  }
  talkers.splice(talkerIndex, 1);
  await writeTalker(talkers);

  res.status(HTTP_NO_CONTENT_STATUS).end();
};

module.exports = deleteTalker;
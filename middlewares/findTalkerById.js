const readFile = require('../helpers/readFile');

const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;

const findTalker = async (req, res) => {
  const talkers = await readFile('./talker.json');
  const { id } = req.params;
  const foundTalker = talkers.find((talker) => talker.id === Number(id));
  
  if (!foundTalker) {
    return res.status(HTTP_NOT_FOUND_STATUS).json(
      { message: 'Pessoa palestrante não encontrada' },
    );
  }
  return res.status(HTTP_OK_STATUS).json(foundTalker);
};

module.exports = findTalker;
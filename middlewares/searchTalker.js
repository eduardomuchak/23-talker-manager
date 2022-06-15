const readFile = require('../helpers/readFile');

const HTTP_OK_STATUS = 200;

const searchTalker = async (req, res) => {
  const { q } = req.query;
  const talkers = await readFile('./talker.json');
  const filteredTalkers = talkers.filter((talker) => talker.name.includes(q));

  if (!q || q === '') return res.status(HTTP_OK_STATUS).json(talkers);
  
  res.status(200).json(filteredTalkers);
};

module.exports = searchTalker;
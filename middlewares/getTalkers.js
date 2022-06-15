const readFile = require('../helpers/readFile');

const HTTP_OK_STATUS = 200;

const getTalkers = async (_req, res) => {
    const talkers = await readFile('./talker.json');
    
    if (!talkers) return res.status(HTTP_OK_STATUS).json([]);
    return res.status(HTTP_OK_STATUS).json(talkers);
};

module.exports = getTalkers;
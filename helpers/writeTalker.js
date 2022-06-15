const fs = require('fs').promises;

const writeTalker = (data) => fs.writeFile('./talker.json', JSON.stringify(data));

module.exports = writeTalker;

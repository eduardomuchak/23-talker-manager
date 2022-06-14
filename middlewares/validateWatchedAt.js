const HTTP_ERROR_STATUS = 400;

const validateWatchedAt = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const validDateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
  // Referência: https://www.regextester.com/99555
  
  if (!watchedAt) {
    return res.status(HTTP_ERROR_STATUS).json(
      { message: 'O campo "watchedAt" é obrigatório' },
    ); 
  }

  if (!watchedAt.match(validDateRegex)) {
    return res.status(HTTP_ERROR_STATUS).json(
      { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
    ); 
  }

  next();
};

module.exports = validateWatchedAt;
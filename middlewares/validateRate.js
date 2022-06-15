const HTTP_BAD_REQUEST_STATUS = 400;

const validateRate = (req, res, next) => {
  const { talk: { rate } } = req.body;
  
  if (Number(rate) < 1 || Number(rate) > 5) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json(
      { message: 'O campo "rate" deve ser um inteiro de 1 à 5' },
      );
    }
  if (!rate) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json(
      { message: 'O campo "rate" é obrigatório' },
    );
  }

  next();
};

module.exports = validateRate;
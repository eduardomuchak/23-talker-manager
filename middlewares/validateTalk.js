const HTTP_ERROR_STATUS = 400;

const validateTalk = (req, res, next) => {
  const { talk } = req.body;
  
  if (!talk) {
    return res.status(HTTP_ERROR_STATUS).json(
      { message: 'O campo "talk" é obrigatório' },
    ); 
  }

  next();
};

module.exports = validateTalk;
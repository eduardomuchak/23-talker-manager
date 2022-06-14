const HTTP_ERROR_STATUS = 400;

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailFormatRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  
  if (!email) {
    return res.status(HTTP_ERROR_STATUS).json(
      { message: 'O campo "email" é obrigatório' },
    ); 
  }
  
  if (!email.match(emailFormatRegex)) {
    return res.status(HTTP_ERROR_STATUS).json(
      { message: 'O "email" deve ter o formato "email@email.com"' },
    );
  }
  
  next();
};

module.exports = validateEmail;
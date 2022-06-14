const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailFormatRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  
  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  
  if (!email.match(emailFormatRegex)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  
  next();
};

module.exports = validateEmail;
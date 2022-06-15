const HTTP_OK_STATUS = 200;

const tokenGenerator = () => {
  let randomToken = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let index = 0; index < 16; index += 1) {
    randomToken += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }
  return randomToken;
};

const generateLoginToken = (_req, res) => {
  res.status(HTTP_OK_STATUS).json({ token: `${tokenGenerator()}` });
};

module.exports = generateLoginToken;

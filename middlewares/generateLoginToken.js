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
  res.status(200).json({ token: `${tokenGenerator()}` });
};

module.exports = generateLoginToken;

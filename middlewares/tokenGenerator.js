// Referência: https://www.webtutorial.com.br/funcao-para-gerar-uma-string-aleatoria-random-com-caracteres-especificos-em-javascript/#:~:text=A%20fun%C3%A7%C3%A3o%20Math.,baixo%20(com%20a%20fun%C3%A7%C3%A3o%20Math.

const tokenGenerator = (_req, res) => {
  let randomToken = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let index = 0; index < 16; index += 1) {
    randomToken += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }
  return res.status(200).send(randomToken);
};

// console.log(tokenGenerator());

module.exports = tokenGenerator;

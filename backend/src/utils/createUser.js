const createUsername = (email) => {
    const emailLowerCase = email.toLowerCase()
   // Dividir o e-mail em duas partes: parte antes do "@" e parte depois do "@"
   const [partBeforeAt, partAfterAt] = emailLowerCase.split('@');

  // Gerar três números aleatórios
  const randomNumbers = Math.floor(Math.random() * 1000);

  // Adicionar os números aleatórios à parte antes do "@"
  const modifiedEmail = `${partBeforeAt}${randomNumbers}`;

  return modifiedEmail;
}
const generatePassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$&*';
    let password = '';

    for (let i = 0; i < 13; i++) {
        const characterIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(characterIndex);
    }
    return password;
}

module.exports = {
    createUsername,
    generatePassword,
}
  
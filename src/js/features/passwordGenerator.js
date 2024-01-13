const passwordGenerator = (passwordLength) => {
  if (!passwordLength || typeof passwordLength !== "number") {
    throw new Error("The 'passwordLength' must be a positive integer number.");
  }

  const LENGTH_MIN = 16;
  const LENGTH_MAX = 1000;

  if (passwordLength < LENGTH_MIN) passwordLength = LENGTH_MIN;
  if (passwordLength > LENGTH_MAX) passwordLength = LENGTH_MAX;

  const CHARACTERS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
  let passwordRandom = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
    passwordRandom += CHARACTERS[randomIndex];
  }

  return passwordRandom;
};

export default passwordGenerator;

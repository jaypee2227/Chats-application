const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
  console.log(password, 1)
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword)
  return hashedPassword;
};

module.exports = encryptPassword;

const jwt = require("jsonwebtoken");

const generateToken = async (id, email) => {
  const generatedToken = await jwt.sign(
    { id: id, email: email },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );

  return generatedToken;
};

module.exports = generateToken;

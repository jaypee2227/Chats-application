const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const verifyToken = async (req, res, next) => {
  let token;
  if (req.headers.authorization.startsWith("Bearer")) {
    try {
      token = await req.headers.authorization.split(" ")[1];
      const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
      req.user = await userModel.findById(decodeToken.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({
        message: "Token is invalid",
        status: false,
        error,
      });
    }
  }
};

module.exports = verifyToken;

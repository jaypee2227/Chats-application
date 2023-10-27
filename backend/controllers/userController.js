const userModel = require("../models/userModel");
const generateToken = require("../config/generateToken");
const encryptPassword = require("../config/encryptPassword");

const userRegister = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      res.send(400).json({
        message: "Email is already Existing",
        status: false,
      });
    } 
      const hashedPassword = await encryptPassword(req.body.password);

      const user = await userModel.create({
        name,
        email,
        password: hashedPassword,
      });

      await user.save()

      res.send(200).json({
        message: "Registration Completed Successfully",
        status: true,
        user,
      });
  } catch (error) {
    res.status(500).json(error)
  }
};
const userLogin = async (req, res) => {};

module.exports = { userRegister, userLogin };

const userModel = require("../models/userModel");
const generateToken = require("../config/generateToken");
const encryptPassword = require("../config/encryptPassword");
const decryptPassword = require("../config/decryptPassword");

const userRegister = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExist = await userModel.findOne({ email });
    const hashedPassword = await encryptPassword(password);
    if (userExist) {
      res.send(400).json({
        message: "Email is already Existing",
        status: false,
      });
    } else {
      await userModel.create({
        name,
        email,
        password: hashedPassword,
      });

      res.send(200).json({
        message: "Registration Completed Successfully",
        status: true,
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await userModel.findOne({ email });
    const decryptedPassword = decryptPassword(password, userExist.password);
    if (!userExist) {
      res.status(400).json({
        message: "User not Exist",
        status: false,
      });
    } else if (!decryptedPassword) {
      res.status(400).json({
        message: "Incorrect Password",
        status: false,
      });
    } else {
      const user = await generateToken(userExist._id, userExist.email);

      res.status(200).json({
        message: "Login Successfull",
        status: true,
        user,
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const findUser = async(req, res) => {
  const userId = req.params.userId
  try {
    const user = await userModel.findById(userId)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
}

const getAllUsers = async(req, res) => {
  try {
    const users = await userModel.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = { userRegister, userLogin, findUser, getAllUsers };

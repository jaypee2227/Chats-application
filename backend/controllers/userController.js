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
    }

    if (!userExist) {
      const user = await userModel.create({
        name,
        email,
        password: hashedPassword,
      });

      res.status(200).json({
        message: "Registration Completed Successfully",
        status: true,
        user,
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
      res.status(500).json({
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
        userExist,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      status: false,
    });
  }
};

const getAllUsers = async (req, res) => {
   const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

    console.log(req.user,"from controller")
  const users = await userModel.find(keyword).find({_id:{ $ne: req.user._id }});

  res.status(200).json({
    users,
  });
};

module.exports = { userRegister, userLogin, getAllUsers };

const express = require("express");
const {
  userRegister,
  userLogin,
  getAllUsers,
} = require("../controllers/userController");
const verifyToken = require("../config/verifyToken");

const router = express.Router();

router.post("/", userRegister);
router.post("/login", userLogin);
router.get("/getallusers", verifyToken, getAllUsers);

module.exports = router;

const express = require("express");
const {userRegister, userLogin, findUser, getAllUsers } = require("../controllers/userController");

const router = express.Router();

router.post("/", userRegister);
router.post("/login", userLogin);
router.get('/finduser/:userId', findUser)
router.get('/getallusers', getAllUsers)

module.exports = router;

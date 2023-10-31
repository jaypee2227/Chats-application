const express = require("express");
const {
  createChat,
  findUserChats,
  findChats,
} = require("../controllers/chatController");

const router = express.Router();

router.post("/createchat", createChat);
router.get("/:userId", findUserChats);
router.get("/find/:firstId/:secondId", findChats);

module.exports = router;

const express = require("express");
const {
  createMessage,
  getMessage,
} = require("../controllers/messageController");

const router = express.Router();

router.post("/createmessage", createMessage);
router.get("/:chatId", getMessage);

module.exports = router;

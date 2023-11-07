const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    senderId : {type : String, trim : true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("messageModel", messageSchema);

const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    chatName: {
      type: String,
      trim: true,
    },
    isGroupchat: {
      type: Boolean,
      default: false,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userModel",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "messageModel",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("chatModel", chatSchema);

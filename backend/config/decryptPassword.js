const express = require("express");
const bcrypt = require("bcrypt");

const decryptPassword = async (password, userPassword) => {
  const decrypted = await bcrypt.compare(password, userPassword);
  return decrypted;
};

module.exports = decryptPassword;

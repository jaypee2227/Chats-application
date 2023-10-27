const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/connect");
const userRoute = require("./routes/userRoute")

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", userRoute)

app.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT}`);
});

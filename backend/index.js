const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/connect");
const router = require("./routes/userRoute");

dotenv.config();

const app = express();

const PORT = 8000 || process.env.PORT;

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);
connectDB();

app.use(express.urlencoded({ extended: false }));
app.use('/api/v1/auth', router)

app.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/connect");
const userRouter = require("./routes/userRoute");
const chatRouter = require("./routes/chatRoutes");
const messageRouter = require("./routes/messageRoute");

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
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/chat", chatRouter);
app.use("/api/v1/message", messageRouter);

app.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT}`);
});

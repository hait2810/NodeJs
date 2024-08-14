import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/byPassCaptcha";
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
    console.log("Mongoose connect succsess");
  } catch (error) {
    console.log(error);
  }
}
connect();
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log("NodeJs is running PORT ", PORT);
});

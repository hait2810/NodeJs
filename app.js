import express from "express";
import cors from "cors";
import routerCronJob from "./routes/cronJob";

const app = express();
app.use(cors);
app.use(express.json());
app.use("api/", routerCronJob);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("NodeJs is running PORT ", PORT);
});

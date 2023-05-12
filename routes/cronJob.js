import express from "express";
import { setCronJob } from "../controllers/cronJob";
const routerCronJob = express.Router();

routerCronJob.post("/cronjob", setCronJob);

export default routerCronJob;

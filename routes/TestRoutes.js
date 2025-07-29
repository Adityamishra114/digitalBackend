import express from "express";
import { saveTestData, getTestData } from "../controllers/testController.js";

const testRouter = express.Router();
testRouter.post("/save", saveTestData);
testRouter.get("/get", getTestData);

export default testRouter;

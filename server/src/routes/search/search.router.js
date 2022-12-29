import express from "express";
import { httpSearchGame } from "./search.controller.js";

const searchRouter = express.Router();
searchRouter.post('/:gameName', httpSearchGame);

export {
  searchRouter,
}
import express from "express";
import { httpGetGames } from "./browse.controller.js";

const browseRouter = express.Router();
browseRouter.get('/:pageNumber', httpGetGames);

export {
  browseRouter,
}
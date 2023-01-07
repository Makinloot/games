import express from "express";
import { httpGetGames, httpGamesByGenres } from "./browse.controller.js";

const browseRouter = express.Router();
const browseGenres = express.Router();
browseRouter.get('/:pageNumber', httpGetGames);
browseGenres.get('/:pageNumber/:genre', httpGamesByGenres);

export {
  browseRouter,
  browseGenres,
}
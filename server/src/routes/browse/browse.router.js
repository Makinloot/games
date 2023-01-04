import express from "express";
import { httpGetGenres } from "./browse.controller.js";

const browseRouter = express.Router();
browseRouter.get('/', httpGetGenres);

export {
  browseRouter,
}
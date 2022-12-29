import express from "express";
import { httpGetPopularGames } from "./home.controller.js";

const homeRouter = express.Router();
homeRouter.get("/", httpGetPopularGames);

export { homeRouter };

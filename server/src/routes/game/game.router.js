import express from "express";
import { httpGetGame } from "./game.controller.js";

const gameRouter = express.Router();
gameRouter.get("/:gameId", httpGetGame);

export { gameRouter };

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// routes
import { homeRouter } from "./routes/home/home.router.js";
import { sliderRouter } from "./routes/slider/slider.router.js";
import { gameRouter } from "./routes/game/game.router.js";
import { searchRouter } from "./routes/search/search.router.js";
import { browseRouter, browseGenres } from "./routes/browse/browse.router.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// init middlewares
app.use(cors());
app.use(express.json());
// app.use(express.static("dist"));
app.use(express.static(path.join(__dirname, './dist')));


// init routes
app.use("/api/hero", homeRouter);
app.use("/api/slider", sliderRouter);
app.use("/api/game", gameRouter);
app.use("/api/search", searchRouter);
app.use("/api/browse", browseRouter);
app.use("/api/browse", browseGenres);

export { app };

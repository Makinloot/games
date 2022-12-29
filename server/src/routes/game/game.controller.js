import * as dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

// init path & .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../../../", ".env") });

const KEY = process.env.RAWG_KEY;

// get game data
let screenshotData = [];
let trailerData = [];
let additionsData = [];
let sameSeries = [];

async function httpGetGame(req, res) {
  const id = req.params.gameId;
  const url = `https://api.rawg.io/api/games/${id}?key=${KEY}&search_precise=true&search_exact=true`;

  gameScreenshots(id);
  gameTrailers(id);
  gameAdditions(id);
  gamesOfSameSeries(id);

  try {
    const resp = await fetch(url);
    const data = await resp.json();
    res.json({
      data,
      screenshotData,
      trailerData,
      additionsData,
      sameSeries,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

// get game screenshots
async function gameScreenshots(id) {
  const url = `https://api.rawg.io/api/games/${id}/screenshots?key=${KEY}&page_size=10`;
  const res = await fetch(url);
  const data = await res.json();
  screenshotData.length = 0;
  screenshotData.push(data);
}

// get game trailers
async function gameTrailers(id) {
  const url = `https://api.rawg.io/api/games/${id}/movies?key=${KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  trailerData.length = 0;
  trailerData.push(data);
}

// get game additions
async function gameAdditions(id) {
  const url = `https://api.rawg.io/api/games/${id}/additions?key=${KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  additionsData.length = 0;
  additionsData.push(data);
}

// list of games that are part of same series
async function gamesOfSameSeries(id) {
  const url = `https://api.rawg.io/api/games/${id}/game-series?key=${KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  sameSeries.length = 0;
  sameSeries.push(data);
}

export { httpGetGame };

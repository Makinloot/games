import * as dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

// init path & .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../../", ".env") });
const KEY = process.env.RAWG_KEY;

getGenres();
let genresArr = [];
async function getGenres() {
  const url = `https://api.rawg.io/api/genres?key=${KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  genresArr.length = 0;
  genresArr.push(data);
}

let gamesArr = [];
async function httpGetGames(req, res) {
  const { pageNumber } = req.params;
  const url = `https://api.rawg.io/api/games?key=${KEY}&page=${pageNumber}&page_size=10&metacritic=80,100&exclude_additions=true&ordering=-updated`;
  const resp = await fetch(url);
  const data = await resp.json();
  const shuffledGenres = genresArr[0].results.sort(() => 0.5 - Math.random()); // shuffle genres results

  gamesArr.length = 0;
  gamesArr.push(data);

  res.json({
    shuffledGenres,
    gamesArr,
  });
}

async function httpGamesByGenres(req, res) {
  const { pageNumber, genre } = req.params;
  const url = `https://api.rawg.io/api/games?key=${KEY}&page=${pageNumber}&page_size=10&genres=${genre}&metacritic=80,100&exclude_additions=true&ordering=-updated`;
  const resp = await fetch(url);
  const data = await resp.json();
  const shuffledGenres = genresArr[0].results.sort(() => 0.5 - Math.random()); // shuffle genres results

  res.json({
    data,
    shuffledGenres,
  });
}

export { httpGetGames, httpGamesByGenres };

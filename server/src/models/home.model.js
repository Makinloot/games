import * as dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

// init path & .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../../", ".env") });

let dataArr = [];

// fetch most rated games from page 1 to 20 and send random page data
async function getPopularGames() {
  const KEY = process.env.RAWG_KEY;
  const randomNumber = Math.floor(Math.random() * 20) + 1; // generate random number up to 20
  
  try {
    const url = `https://api.rawg.io/api/games?key=${KEY}&page=${randomNumber}&page_size=20&metacritic=70,100&dates=2019-01-01,2020-12-31.2021-01-01,2022-12-31`;
    const resp = await fetch(url);
    const data = await resp.json();
    dataArr.length = 0;
    dataArr.push(data);
  } catch (error) {
    dataArr.push(error);
  }
}

export { dataArr, getPopularGames };

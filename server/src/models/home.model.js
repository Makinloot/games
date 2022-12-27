import * as dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

// init path & .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../../", ".env") });

let dataArr = [];

// fetch most rated games from page 1 to 10 and send random page data
async function getPopularGames() {

  const KEY = process.env.RAWG_KEY;
  const randomNumber = Math.floor(Math.random() * 5) + 1; // generate random number up to 10
  try {
    const url = `https://api.rawg.io/api/games?key=${KEY}&page=${randomNumber}&page_size=5&metacritic=70,100`;
    const resp = await fetch(url);
    const data = await resp.json();
    dataArr.length = 0;
    dataArr.push(data); 
  } catch (error) {
    dataArr.push(error);
  }
}

export { dataArr, getPopularGames };
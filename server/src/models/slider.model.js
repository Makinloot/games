import * as dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

// init path & .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../../", ".env") });

let sliderDataArr = [];

// fetch games from page 1 to 150 and send random one to user
async function sliderGames() {
  const KEY = process.env.RAWG_KEY;
  const randomNumber = Math.floor(Math.random() * 150) + 1; // generate random page number up to 150
  
  try {
    const url = `https://api.rawg.io/api/games?key=${KEY}&page=${randomNumber}&ordering=-rating&metacritic=70,100`;
    const resp = await fetch(url);
    const data = await resp.json();
    sliderDataArr.length = 0;
    sliderDataArr.push(data);
  } catch (error) {
    sliderDataArr.push(error);
  }
}

export { sliderDataArr, sliderGames };

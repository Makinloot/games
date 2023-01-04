import * as dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

// init path & .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../../", ".env") });

const KEY = process.env.RAWG_KEY;
let genresArr = [];

getGenres();
async function getGenres() {
  const url = `https://api.rawg.io/api/genres?key=${KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  genresArr.push(data);
}

export {
  genresArr,
}
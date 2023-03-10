import * as dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

// init path & .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../../../", ".env") });

const KEY = process.env.RAWG_KEY;

async function httpSearchGame(req, res) {
  const { name, page } = req.body;
  const url = `https://api.rawg.io/api/games?key=${KEY}&search=${name}&search_exact=true&exclude_additions=true&ordering=metacritic=50,100&page=${page || 1}&page_size=10&metacritic=50,100`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}

export { httpSearchGame };

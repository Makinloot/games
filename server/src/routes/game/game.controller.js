import * as dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

// init path & .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../../../", ".env") });

async function httpGetGame(req, res) {
  const id = req.params.gameId;
  const KEY = process.env.RAWG_KEY;
  const url = `https://api.rawg.io/api/games/${id}?key=${KEY}&search_precise=true&search_exact=true`;

  try {
    const resp = await fetch(url);
    const data = await resp.json();
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}

export { httpGetGame };

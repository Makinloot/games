import { dataArr } from "../../models/home.model.js";

function httpGetPopularGames(req, res) {
  res.status(200).json(dataArr);
}

export { httpGetPopularGames };

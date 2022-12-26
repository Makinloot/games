import { dataArr, getPopularGames } from "../../models/home.model.js";

function httpGetPopularGames(req, res) {
  getPopularGames();
  res.status(200).json(dataArr)
}

export {
  httpGetPopularGames,
}
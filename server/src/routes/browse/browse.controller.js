import { genresArr } from "../../models/browse.model.js";

function httpGetGenres(req, res) {
  res.json(genresArr);
}

export {
  httpGetGenres,
}
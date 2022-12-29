import { sliderDataArr, sliderGames } from "../../models/slider.model.js";

function httpSliderGames(req, res) {
  sliderGames();
  res.status(200).json(sliderDataArr);
}

export { httpSliderGames };

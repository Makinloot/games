import { sliderDataArr } from "../../models/slider.model.js";

function httpSliderGames(req, res) {
  try {
    res.status(200).json(sliderDataArr);
  } catch (error) {
    res.status(500).json('Server error', error);
  }
}

export { httpSliderGames };

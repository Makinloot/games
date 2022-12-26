import express from 'express';
import { httpSliderGames } from './slider.controller.js';

const sliderRouter = express.Router();
sliderRouter.get('/', httpSliderGames);

export {
  sliderRouter,
}
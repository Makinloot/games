import express from 'express';
import cors from 'cors';
// routes
import { homeRouter } from './routes/home/home.router.js';
import { sliderRouter } from './routes/slider/slider.router.js';
import { gameRouter } from './routes/game/game.router.js';

const app = express();

// init middlewares
app.use(cors());
app.use(express.json());

// init routes
app.use('/hero', homeRouter);
app.use('/slider', sliderRouter);
app.use('/game', gameRouter);

export {
    app,
}
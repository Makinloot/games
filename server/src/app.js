import express from 'express';
import cors from 'cors';

const app = express();

// init middlewares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Im here')
})

export {
    app,
}
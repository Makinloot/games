import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import GameSlider from "./GameSlider";
import GameDetails from "./GameDetails";
import GameAdditions from "./GameAdditions";
import Loading from "../Loading";
import SameSeries from "./SameSeries";

import { IGamesData } from "../../dataTypes";

const Game = (): JSX.Element => {
  const { id } = useParams();
  const [gameData, setGameData] = useState<IGamesData | null>(null)

  useEffect(() => {
    fetchGame(id);
  }, []);

  async function fetchGame(gameId: number | string | undefined) {
    const url = `http://localhost:5000/game/${gameId}`;
    const res = await fetch(url);
    const data = await res.json();
    setGameData(data);
  }

  
  if (gameData) {
    const { data } = gameData;
    const { name } = data;
    const { results } = gameData.screenshotData[0];
    const trailer = gameData.trailerData[0].results;
    const additions = gameData.additionsData[0].results;
    const sameSeries = gameData.sameSeries[0].results;

    return (
      <div className="Game">
        <div className="container">
          <div className="Game-wrapper">
            <h2>{name}</h2>
            <GameSlider trailerData={trailer} sliderData={results} />
            <GameDetails data={data} />
          </div>
          <SameSeries data={sameSeries} />
          {additions.length > 0 ? <GameAdditions additionsData={additions} /> : null}
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Game;

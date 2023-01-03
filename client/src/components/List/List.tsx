import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IGameListResults } from "../../dataTypes";
import Loading from "../Loading";

const List = () => {
  const { name } = useParams();
  const [gameData, setGameData] = useState<IGameListResults | null>(null);
  console.log("loil", gameData);

  useEffect(() => {
    fetchGame(name);
  }, []);

  async function fetchGame(gameName: number | string | undefined) {
    const searchName = {
      name: name,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(searchName),
    };
    const url = `http://localhost:5000/search/${gameName}`;
    const res = await fetch(url, options);
    const data = await res.json();
    setGameData(data);
  }

  if (gameData) {
    const { results, count } = gameData;
    return (
      <div className="List">
        <div className="container">
          <div className="List-count">{count} results match your search.</div>
          <div className="List-wrapper flex-col">
            {results.map((result) => {
              const { name, background_image, released, id } = result;
              return (
                <a href={`/game/${id}`} className="List-item flex-row" key={id}>
                  <div className="list-image">
                    <img src={background_image} alt={name} />
                  </div>
                  <div className="list-title">
                    <h3>{name}</h3>
                  </div>
                  <div className="list-date">{released}</div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return <Loading />;
};

export default List;

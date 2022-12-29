import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const List = () => {
  const { name } = useParams();
  const [gameData, setGameData] = useState<any>(null);

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

  console.log(gameData);

  if (gameData) {
    const { results } = gameData;
    return (
      <div className="List">
        <div className="container">
          <div className="List-wrapper flex-col">
            {results.map((result: {
              name: string;
              background_image: string;
              released: number;
              id: number;
            }) => {
              const { name, background_image, released, id } = result;
              return (
                <a href={`/game/${id}`} className="List-item flex-row">
                  <div className="list-image">
                    <img src={background_image} alt={name} />
                  </div>
                  <div className="list-title">
                    <h3>{name}</h3>
                  </div>
                  <div className="list-date">
                    {released}
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="List">
      <div className="container">
        <div className="List-wrapper"></div>
      </div>
    </div>
  );
};

export default List;

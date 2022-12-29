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
    }
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

  return (
    <div>List</div>
  )
}

export default List
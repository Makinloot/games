import { useState, useEffect } from "react"
import Loading from "../Loading";

import { IGenres } from "../../dataTypes";

import Genres from "./Genres";

const Browse = (): JSX.Element => {
  
  const [genresData, setGenresData] = useState<IGenres[] | null>(null);

  useEffect(() => {
    fetchBrowseData();
  }, []);

  async function fetchBrowseData(): Promise<void> {
    const url = `http://localhost:5000/browse`;
    const res = await fetch(url);
    const data = await res.json();
    setGenresData(data);
  }

  if(genresData) {
    return (
      <div className="Browse">
        <div className="container">
          <div className="Browse-wrapper">
            <Genres data={genresData} />
          </div>
        </div>
      </div>
    )
  }

  return <Loading />
}

export default Browse
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { IBrowse } from "../../dataTypes";

import Genres from "./Genres";
import Games from "./Games";
import Loading from "../Loading";
import Pagination from "../Pagination";

const Browse = (): JSX.Element => {
  const [browseData, setBrowseData] = useState<IBrowse | null>(null);
  const { page } = useParams();

  useEffect(() => {
    fetchBrowseData();
  }, []);

  async function fetchBrowseData(): Promise<void> {
    const url = `http://localhost:5000/browse/${page}`;
    const res = await fetch(url);
    const data = await res.json();
    setBrowseData(data);
  }

  if (browseData) {
    const { count, results } = browseData.gamesArr[0];
    const genreResults = browseData.shuffledGenres;
    console.log(browseData);
    return (
      <div className="Browse">
        <div className="container">
          <Genres data={genreResults} />
          <div className="Browse-wrapper">
            <Games data={results} />
          </div>
          <Pagination count={count} endpoint="/browse" />
        </div>
      </div>
    );
  }

  return <Loading />;
};

export default Browse;

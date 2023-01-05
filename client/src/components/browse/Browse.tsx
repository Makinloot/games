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
  console.log(browseData);

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
    const { count, next, previous } = browseData.gamesArr[0];
    return (
      <div className="Browse">
        <div className="container">
          <div className="Browse-wrapper">
            <Genres data={browseData} />
            <Games data={browseData} />
            <Pagination count={count} next={next} previous={previous} endpoint="/browse/" />
          </div>
        </div>
      </div>
    );
  }

  return <Loading />;
};

export default Browse;

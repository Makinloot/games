import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBrowseGamesByGenres } from "../../dataTypes";
import Loading from "../Loading";
import Games from "./Games";
import Genres from "./Genres";
import Pagination from "../Pagination";

const BrowseByGenres = (): JSX.Element => {
  const [browseGenresData, setBrowseGenresData] = useState<IBrowseGamesByGenres | null>(null);
  const { page, genre } = useParams();

  useEffect(() => {
    fetchBrowseGenresData();
  }, []);

  async function fetchBrowseGenresData(): Promise<void> {
    const url = `http://localhost:5000/browse/${page}/${genre}`;
    const res = await fetch(url);
    const data = await res.json();
    setBrowseGenresData(data);
  }

  if (browseGenresData) {
    console.log(browseGenresData, "this shit");
    const { count, results } = browseGenresData.data;
    const genreResults = browseGenresData.shuffledGenres;
    return (
      <div className="Browse">
        <div className="container">
          <Genres data={genreResults} />
          <div className="Browse-wrapper">
            <Games data={results} />
          </div>
          <Pagination count={count} endpoint={`/browse/${genre}`} />
        </div>
      </div>
    );
  }

  return <Loading />;
};

export default BrowseByGenres;

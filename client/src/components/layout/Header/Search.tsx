import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchValue, setSearchValue] = useState<string | number | null>(null);
  const [searchResults, setSearchResults] = useState<[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href=`/search/${searchValue}/1`;
  }

  const handleChange = (e: HTMLInputElement | any) => {
    setSearchValue(e.target.value);
    fetchSearch(e.target.value);
  }

  // send post request to fetch search results
  const fetchSearch = async (value: string) => {
    const searchValue = {
      name: value || 'stringThatPreventsDisplayingResultsWhileSearchIsEmpty' 
    }
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(searchValue),
    };
    const url = `/api/search/${searchValue}`;
    const res = await fetch(url, options);
    const data = await res.json();

    const { results } = data;

    setSearchResults(results);
  }

  return (
    <form className="Header-search flex-row" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} required />
      <button className="flex-row">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <div className="search-results flex-col">
        {searchResults && searchResults.length > 0
          ? searchResults
            .map(
                (result: {
                  name: string;
                  background_image: string;
                  id: number;
                }) => {
                  const { name, background_image, id } = result;
                  return (
                    <Link to={`/game/${id}`} className="result" key={id}>
                      <img src={background_image} alt={name} />
                      <h4>{name}</h4>
                    </Link>
                  );
                }
              ).slice(0, 4)
            : 
            null
        }
      </div>
    </form>
  );
};

export default Search;

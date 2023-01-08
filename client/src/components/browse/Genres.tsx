import { IGenreResults } from "../../dataTypes";

const Genres = ({ data }: { data: IGenreResults[] }) => {
  const handleGenresMap = (): JSX.Element[] | undefined => {
    if (data) {
      const filteredGenres = data.filter(
        (item) => item.name !== "Platformer" && item.name !== "Educational"
      );
      const genresMap = filteredGenres
        .map((genre) => {
          let { id, name, slug } = genre;
          if (name === "Board Games") name = "board";
          if (name == "Massively Multiplayer") name = "multiplayer";
          return (
            <a href={`/browse/${slug}/1`} className="genre" key={id}>
              {name}
            </a>
          );
        })
        .slice(0, 10); // return 10 genre from shuffled results array as jsx element
      return genresMap;
    }
  };

  return (
    <>
      <h2 className="genre-heading">genres</h2>
      <div className="Browse-genres flex-row">{handleGenresMap()}</div>
    </>
  );
};

export default Genres;

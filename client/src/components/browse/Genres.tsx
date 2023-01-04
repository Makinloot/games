import { IGenres } from "../../dataTypes";

const Genres = ({ data }: {
  data: IGenres[];
}) => {

  console.log(data)

  // const filterData = data[0].results.filter(result => {
  //   if(result.name === 'Massively Multiplayer')
  // });

  const handleGenresMap = (): JSX.Element[] | undefined => {
    if (data) {
      const shuffled = data[0].results.sort((): number => 0.5 - Math.random()); // return genre elements in random positions
      const filterShuffled = shuffled.filter(item => item.name !== 'Platformer' && item.name !== 'Educational');
      console.log(filterShuffled, 'filtered')
      const genresMap = filterShuffled.map((genre) => {
          let { id, name } = genre;
          if(name === "Massively Multiplayer") name = 'multiplayer';
          if(name === "Board Games") name = 'board';
          return (
            <a 
              href={"/browse/" + id}
              className="genre"
              key={id}
            >
              {name}
            </a>
          );
        }).slice(0, 10); // return 10 genre from shuffled results array as jsx element
      return genresMap;
    }
  };

  return (
    <>
      <h2 className="genre-heading">genres</h2>
      <div className="Browse-genres flex-row">
        {handleGenresMap()}
      </div>
    </>
    );
};

export default Genres;

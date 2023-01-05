import Loading from "../Loading";

import { IBrowse } from "../../dataTypes";

const Games = ({ data }: { data: IBrowse }): JSX.Element => {
  if (data) {
    const { gamesArr } = data;
    const { results } = gamesArr[0];

    console.log(gamesArr[0].results);

    const gamesMap = results.map((game): JSX.Element => {
      const { background_image, name, id, released, genres, platforms } = game;

      return (
        <div className="Browse-games-item" key={id}>
          <div className="Browse-games-img">
            <img src={background_image} alt={name} />
          </div>
          <div className="Browse-games-details flex-col">
            <h4>Information about the game</h4>
            <div className="detail"><strong>name:</strong> {name}</div>
            <div className="detail"><strong>date:</strong> {released.split("-")[0]}</div>
            <div className="detail"><strong>genre:</strong> {genres && genres.map(genre => genre.name).join(', ')}</div>
            <div className="detail"><strong>platforms:</strong> {platforms && platforms.map(platform => platform.platform.name).join(', ')}</div>
          </div>
          <a className="see-more" href={"/game/" + id}>See More...</a>
        </div>
      );
    }).slice(0, 10);

    return (
      <div className="Browse-games flex-col">
        {gamesMap}
      </div>
    );
  }

  return <Loading />;
};

export default Games;

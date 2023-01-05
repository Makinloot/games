import Loading from "../Loading";

import { IBrowse } from "../../dataTypes";

const Games = ({ data }: { data: IBrowse }): JSX.Element => {
  if (data) {
    const { gamesArr } = data;
    const { results } = gamesArr[0];

    // console.log(gamesArr[0].results);

    const gamesMap = results.map((game): JSX.Element => {
      const { background_image, name, id } = game;

      return (
        <div className="Games-item" key={id}>
          <div className="Games-img">
            <img src={background_image} alt={name} />
          </div>
        </div>
      );
    }).slice(0, 10);

    return (
      <div className="Games">
        {gamesMap}
      </div>
    );
  }

  return <Loading />;
};

export default Games;

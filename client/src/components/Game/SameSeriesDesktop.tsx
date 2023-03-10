import { IResults } from "../../dataTypes";
import { Link } from "react-router-dom";

const SameSeriesDesktop = ({ data }: { data: IResults[] }) => {
  const uniqueKey = ():number => {
    return Math.random() * Math.random() * Math.random();
  }
  return (
    <>
      <strong className="Series-title">Games from same series</strong>
      <div className="Series">
        <>
          {data
            .map((game, i): JSX.Element => {
              const {
                background_image,
                name,
                id,
                released,
                ratings_count,
                ratings,
              } = game;
              return (
                <div className="Series-game" key={id}>
                  <Link to={`/game/${id}`} title={name}>
                    <div className="img-container">
                      <img src={background_image} alt={name} />
                    </div>
                  </Link>
                  <Link to={`/game/${id}`} className="hover-details">
                  <div className="hover-details-name">{name}</div>
                  <div className="hover-details-released">
                    released: {released}
                  </div>
                  <div className="hover-details-img">
                    <img src={background_image} alt={name} />
                  </div>
                  <div className="hover-details-reviews">
                    <p>overall user reveiws:</p>
                    <div className="reviews">
                      {ratings[0] && <span>{ratings[0].title}</span>}{" "}
                      (reviews: {ratings_count})
                    </div>
                  </div>
                  <div className="hover-details-genres">
                    <p>tags:</p>
                    <div className="genres-wrapper flex-row">
                      {game.genres.map(genre => <div className="genre" key={uniqueKey()}>{genre.name}</div> )}
                      {game.tags.map(tag => <div className="genre" key={uniqueKey()}>{tag.name}</div> )}
                    </div>
                  </div>
                  </Link>
                </div>
              );
            })
            .slice(0, 6)}
        </>
      </div>
    </>
  );
};

export default SameSeriesDesktop;

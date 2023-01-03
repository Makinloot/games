import { IResults } from "../../dataTypes";

const SameSeriesDesktop = ({ data }: { data: IResults[] }) => {
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
                  <a href={`/game/${id}`} title={name}>
                    <div className="img-container">
                      <img src={background_image} alt={name} />
                    </div>
                  </a>
                  <a href={`/game/${id}`} className="hover-details">
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
                      <p>genres:</p>
                      <div className="genres-wrapper flex-row">
                        {game.genres.map(genre => <div className="genre">{genre.name}</div> )}
                        {/* <div className="genre">{game.genres.slice(0, 4).join(', ')}</div> */}
                      </div>
                    </div>
                  </a>
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

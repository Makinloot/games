export type propsTypes = {
  data: {
    id: number;
    name: string;
    background_image: string;
    reviews_count: number;
    released: number;
    developers: [
      {
        name: string;
      }
    ];
    publishers: [
      {
        name: string;
      },
      {
        name: string;
      }
    ];
    genres: [];
    description_raw: string;
    ratings: [
      {
        title: string;
        percent: number;
      }
    ];
  };
};

const GameDetails = ({ data }: propsTypes): JSX.Element | undefined | any => {
  const {
    id,
    name,
    background_image,
    reviews_count,
    released,
    publishers,
    developers,
    genres,
    description_raw,
  } = data;
  if(data) {
    return (
      <div className="Game-details flex-col">
        {/* game image */}
        <div className="details-img">
          <img src={background_image} alt={name} />
        </div>
        <div className="details-text flex-col">
          <div className="reviews">
            <div className="detail-tag">all reviews: {reviews_count}</div>
            {data.ratings.map(rating => {
              const { title, percent } = rating;
              return <div className="detail-tag" key={id}>mostly {title} <span>{percent}%</span></div>
            }).slice(0, 1)}
          </div>
          {/* game release */}
          <div className="release">
            <div className="detail-tag">released: {released}</div>
          </div>
          {/* game publishers */}
          <div className="publishers">
            <div className="detail-tag">
              developers: {developers.map(developer => developer.name).join(', ')}
            </div>
            <div className="detail-tag">
              publishers: {publishers.map(publisher => publisher.name).join(', ')}
            </div>
          </div>
          {/* game genres */}
          <div className="genres">
            <div className="detail-tag">
              genres:{" "}
              {genres.map((genre: { name: string }) => genre.name).join(", ")}
            </div>
          </div>
          {/* game description */}
          <div className="description">
            <p>{description_raw}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default GameDetails;
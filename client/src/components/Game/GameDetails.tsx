type propsTypes = {
  data: {
    name: string;
    background_image: string;
    reviews_count: number;
    released: number;
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

const GameDetails = ({ data }: propsTypes) => {
  const {
    name,
    background_image,
    reviews_count,
    released,
    publishers,
    genres,
    description_raw,
  } = data;
  const { title, percent } = data.ratings[0];
  return (
    <div className="Game-details flex-col">
      {/* game image */}
      <div className="details-img">
        <img src={background_image} alt={name} />
      </div>
      <div className="details-text flex-col">
        <div className="reviews">
          <div className="detail-tag">all reviews: {reviews_count}</div>
          <div className="detail-tag">
            mostly: {title} <span>{percent}%</span>
          </div>
        </div>
        {/* game release */}
        <div className="release">
          <div className="detail-tag">released: {released}</div>
        </div>
        {/* game publishers */}
        <div className="publishers">
          <div className="detail-tag">
            publishers: {publishers[0] && publishers[0].name}{" "}
            {publishers[1] && `,${publishers[1].name}`}
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
};

export default GameDetails;
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const Game = () => {
  const { id } = useParams();
  const [gameData, setGameData] = useState<any>(null);

  useEffect(() => {
    fetchGame();
  }, []);

  async function fetchGame() {
    const url = `http://localhost:5000/game/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setGameData(data);
  }

  if (gameData) {
    const {
      name,
      background_image,
      reviews_count,
      released,
      publishers,
      genres,
      description_raw,
    } = gameData.data;
    const { title, percent } = gameData.data.ratings[0];
    const { results } = gameData.screenshotData[0];
    const trailer = gameData.trailerData[0].results;
    return (
      <div className="Game">
        <div className="container">
          <div className="Game-wrapper">
            <h2>{name}</h2>
            <div className="Game-slider">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={100}
                className="mySwiper"
              >
                {trailer &&
                  trailer.map((video: {data: any}) => {
                    const { max } = video.data;
                    return <SwiperSlide>
                      <video controls>
                        <source src={max} type="video/mp4" />
                      </video>
                    </SwiperSlide>
                  })
                }
                {results.map((result: string | any) => {
                  const { image } = result;
                  return (
                    <SwiperSlide>
                      <img src={image} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="Game-details flex-col">
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

                <div className="release">
                  <div className="detail-tag">released: {released}</div>
                </div>

                <div className="publishers">
                  <div className="detail-tag">
                    publishers: {publishers[0].name}{" "}
                    {publishers[1] && `,${publishers[1].name}`}
                  </div>
                </div>

                <div className="genres">
                  <div className="detail-tag">
                    genres:{" "}
                    {genres
                      .map((genre: { name: string }) => genre.name)
                      .join(", ")}
                  </div>
                </div>

                <div className="description">
                  <p>{description_raw}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Loading">
        <div className="container">Loading...</div>
      </div>
    );
  }
};

export default Game;

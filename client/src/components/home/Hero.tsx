import { useState } from "react";
import { Link } from "react-router-dom";
// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// required swiper modules
import { Thumbs } from "swiper";
import { IResults } from "../../dataTypes";

const Hero = ({ data }: { data: IResults[] }): JSX.Element => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  // display results randomly in slider & pick first five elements
  const shuffled = data.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 5);

  return (
    <div className="Hero">
      <div className="container">
        <strong className="Hero-title">Popular games</strong>
        <div className="Hero-wrapper">
          <Swiper
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Thumbs]}
            touchRatio={0}
            className="mySwiper2 Hero-primary"
          >
            {selected.map(
              (game: {
                id: number;
                background_image: string;
                name: string;
              }) => {
                const { background_image, name, id } = game;
                return (
                  <SwiperSlide
                    key={id}
                    style={{ backgroundImage: `url(${background_image})` }}
                  >
                    <img src={background_image} alt={name} />
                    <h3>{name}</h3>
                    <Link className="Hero-primary-link" to={`/game/${id}`}>check out</Link>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            touchRatio={0}
            className="mySwiper Hero-secondary"
          >
            {selected.map(
              (game) => {
                const { background_image, name } = game;
                const id = Number(game.id);
                return (
                  <SwiperSlide key={id}>
                    <div className="Hero-secondary-slider">
                      <div className="slider-img">
                        <img src={background_image} alt={name} />
                      </div>
                      <strong className="slider-text">{name}</strong>
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;

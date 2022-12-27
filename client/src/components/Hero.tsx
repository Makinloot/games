import { useRef, useState } from "react";
// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// required swiper modules
import { Thumbs } from "swiper";

const Hero = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const gamesData = data[0].results;

  return (
    <div className="Hero">
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Thumbs]}
        touchRatio={0}
        className="mySwiper2 Hero-primary"
      >
        {gamesData.map((game: { id: number; background_image: string; name: string; }) => {
          const { background_image, name } = game;
          const id = Number(game.id);
          return (
            <SwiperSlide key={id}>
              <img src={background_image} alt={name} />
              <h3>{name}</h3>
              <a href="#">check out</a>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        touchRatio={0}
        className="mySwiper Hero-secondary"
      >
        {gamesData.map((game: { id: number; background_image: string; name: string; }) => {
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
        })}
        {/* <SwiperSlide>
          <div className="Hero-secondary-slider">
            <div className="slider-img">
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </div>
            <strong className="slider-text">Slider text here</strong>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Hero-secondary-slider">
            <div className="slider-img">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </div>
            <strong className="slider-text">Slider text here</strong>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Hero-secondary-slider">
            <div className="slider-img">
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </div>
            <strong className="slider-text">Slider text here</strong>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Hero-secondary-slider">
            <div className="slider-img">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </div>
            <strong className="slider-text">Slider text here</strong>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Hero-secondary-slider">
            <div className="slider-img">
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </div>
            <strong className="slider-text">
              Slider text here Slider text here text here text here text here
            </strong>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Hero;

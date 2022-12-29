import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import noImg from '../../not-found.png';

type propsTypes = {
  trailerData: [];
  sliderData: [];
};

const uniqueKey = (): number => {
  return Math.random() * Math.random() * Math.random();
};

const GameSlider = ({ trailerData, sliderData }: propsTypes) => {
  return (
    <div className="Game-slider">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        className="mySwiper"
      >
        {trailerData &&
          trailerData.map((video: { data: { max: string } }) => {
            const { max } = video.data;
            return (
              <SwiperSlide key={uniqueKey()}>
                <video controls>
                  <source src={max} type="video/mp4" />
                </video>
              </SwiperSlide>
            );
          })}
        {sliderData.map((result: { image: string }) => {
          const { image } = result;
          return (
            <SwiperSlide key={uniqueKey()}>
              <img src={image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default GameSlider;

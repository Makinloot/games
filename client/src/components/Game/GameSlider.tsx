import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

interface ITrailer {
  data: {
    480: string;
    max: string;
  }
  id: number;
  name: string;
  preview: string;
}

interface ISlider {
  height: number;
  id: number;
  image: string;
  is_deleted: boolean;
  width: number;
}

const GameSlider = ({ trailerData, sliderData }: {
  trailerData: ITrailer[],
  sliderData: ISlider[],
}) => {

  const uniqueKey = (): number => {
    return Math.random() * Math.random() * Math.random();
  };

  return (
    <div className="Game-slider">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        className="mySwiper"
      >
        {trailerData &&
          trailerData.map((video) => {
            const { max } = video.data;
            return (
              <SwiperSlide key={uniqueKey()}>
                <video controls>
                  <source src={max} type="video/mp4" />
                </video>
              </SwiperSlide>
            );
          })}
        {sliderData && sliderData.map((result: { image: string }) => {
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

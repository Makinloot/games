// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

type Props = {
  [key: string]: any;
};

const Slider: React.FunctionComponent<Props> = ({ data }) => {
  const sliderData = data[0].results;

  console.log(sliderData);

  return (
    <div className="Slider">
      <div className="container">
        <strong className="Slider-title">Random games</strong>
        <div className="Slider-wrapper">
          <Swiper
            slidesPerView={5.2}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {sliderData.map(
              (slide: {
                background_image: string;
                id: number;
                name: string;
                rating: number;
                ratings_count: number;
                genres: [];
              }) => {
                const {
                  background_image,
                  id,
                  name,
                  rating,
                  ratings_count,
                  genres,
                } = slide;

                return (
                  <SwiperSlide className="Slider-slide" key={id}>
                    <div className="Slider-img">
                      <img src={background_image} alt={name} />
                    </div>
                    <div className="Slider-text flex-col">
                      <h4>{name}</h4>
                      <strong>
                        {genres
                          .map((genre: { name: any }) => genre.name)
                          .slice(0, 2)
                          .join(", ")}
                      </strong>

                      <p>
                        ratings: {rating} {`(${ratings_count})`}
                      </p>
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

export default Slider;

import { useState, useEffect } from "react";
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
  
  const [slideCount, setSlideCount] = useState<number>(5.2);
  
  const sliderData = data[0].results;
  const shuffled = sliderData.sort(() => 0.5 - Math.random());

  const { width } = document.body.getBoundingClientRect();
  const slideByWidth = () => {
    if(width > 1000) return;
    else if(width < 1000 && width > 650) setSlideCount(4);
    else if(width < 650 && width > 480) setSlideCount(3);
    else setSlideCount(1.2)
  }

  useEffect(() => {
    slideByWidth();
  }, []);

  return (
    <div className="Slider">
      <div className="container">
        <strong className="Slider-title">Random games</strong>
        <div className="Slider-wrapper">
          <Swiper
            slidesPerView={slideCount}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {shuffled.map(
              (slide: {
                background_image: string;
                id: string;
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
                  <SwiperSlide 
                    className="Slider-slide"
                    id={id}
                    key={id}
                    onClick={(e) => {
                      window.location.href = `/game/${id}`;
                    }}
                  >
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
                    <input type="hidden" value={id} />
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

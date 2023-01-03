// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

import { IResults } from "../../dataTypes";

const SameSeriesSlider = ({ data }: { data: IResults[] }) => {
  console.log("LMAO", data);
  const { width } = document.body.getBoundingClientRect();
  const handleWidth = () => {
    if (width > 900) return 5.85;
    else if (width <= 900 && width > 700) return 4;
    else if (width <= 700 && width > 480) return 3.4;
    else if (width <= 480 && width > 380) return 2;
    else return 1.5;
  };

  return (
    <>
      <strong className="Series-title">Games from same series</strong>
      <div className="Series-slider">
        {data && data.length > 0 && width < 1024 ? (
          <Swiper
            slidesPerView={handleWidth()}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper Series-swiper"
          >
            {data.map((slide, i) => {
              const { background_image, name, id } = slide;
              return (
                <SwiperSlide className="slide" key={id}>
                  <a href={"/game/" + id} title={name}>
                    <div className="img-container">
                      <img src={background_image} alt={name} />
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : null}
      </div>
    </>
  );
};

export default SameSeriesSlider;

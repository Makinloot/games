// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

const handleWidth = () => {
  const { width } = document.body.getBoundingClientRect();
  if (width > 900) return 5.85;
  else if (width < 900 && width > 700) return 4;
  else if (width < 700 && width > 480) return 3.4;
  else if (width < 480 && width > 380) return 2;
  else return 1.5;
};

const SameSeries = ({ data }: {
  data: []
}) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="Series">
          <strong className="Series-title">Games from same series</strong>
          <Swiper
            slidesPerView={handleWidth()}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper Series-swiper"
          >
            {data.map((slide: {
              background_image: string;
              name: string;
              id: number;
            }) => {
              console.log('im slide', slide);
              const { background_image, name, id } = slide;
              return (
                <SwiperSlide className="slide" key={id}>
                  <a href={"/game/" + id}>
                    <div className="img-container">
                      <img src={background_image} alt={name} />
                    </div>
                    <h5>{name}</h5>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : null}
    </>
  );
};

export default SameSeries;

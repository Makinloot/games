import { useRef, useState } from "react";
// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// required swiper modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div className="Hero">
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[Thumbs]}
        touchRatio={0}
        className="mySwiper2 Hero-primary"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        touchRatio={0}
        className="mySwiper Hero-secondary"
      >
        <SwiperSlide>
          <div className="Hero-secondary-slider">
            <div className="slider-img">
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </div>
            <strong className="slider-text">
              Slider text here
            </strong>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Hero-secondary-slider">
            <div className="slider-img">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </div>
            <strong className="slider-text">
              Slider text here
            </strong>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Hero-secondary-slider">
            <div className="slider-img">
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </div>
            <strong className="slider-text">
              Slider text here
            </strong>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Hero-secondary-slider">
            <div className="slider-img">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </div>
            <strong className="slider-text">
              Slider text here
            </strong>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Hero-secondary-slider">
            <div className="slider-img">
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </div>
            <strong className="slider-text">
              Slider text here
            </strong>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
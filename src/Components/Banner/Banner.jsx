// Import Swiper React components
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import required modules
import { useRef } from "react";
import { Autoplay, EffectFade } from "swiper/modules";

export default function Banner() {
  const swiperRefLocal = useRef();
  const handleMouseEnter = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.stop();
  };
  const handleMouseLeave = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.start();
  };
  return (
    <div
      className="w-full h-[555px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        ref={swiperRefLocal}
        autoplay={{ delay: 600 }}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide>
          <img
            className="w-full object-contain"
            src="https://i.ibb.co/FVFGD30/pexels-ian-panelo-7036446.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="https://i.ibb.co/wNzb8Qz/portrait.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-contain"
            src="https://i.ibb.co/WpkLKHy/oil.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-contain"
            src="https://i.ibb.co/ZzK8h8h/16516.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-contain"
            src="https://i.ibb.co/0Fjcgww/h26090.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-contain"
            src="https://i.ibb.co/Hpqq24R/blob.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

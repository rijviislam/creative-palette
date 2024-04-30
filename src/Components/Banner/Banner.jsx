import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

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
      className="lg:w-full md:w-[768px] w-[360px] flex items-center justify-center h-[350px] lg:h-[555px] -z-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        ref={swiperRefLocal}
        autoplay={{ delay: 1000 }}
        className="mySwiper -z-10  lg:w-full md:w-[768px] w-full lg:h-full h-full"
      >
        <SwiperSlide>
          <div className="flex w-[360px] md:w-[768px] h-[350px] lg:w-full lg:h-[555px]">
            <img
              className="cursor- w-full h-full lg:w-full lg:h-full -z-10 object-cover border border-red-50"
              src="https://i.ibb.co/FVFGD30/pexels-ian-panelo-7036446.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-[360px] md:w-[768px] h-[350px] lg:w-full lg:h-[555px] ">
            <img
              className="cursor- w-full h-full lg:w-full lg:h-full -z-10 object-cover"
              src="https://i.ibb.co/wNzb8Qz/portrait.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-[360px] md:w-[768px] h-[350px] lg:w-full lg:h-[555px] ">
            <img
              className="cursor- w-full h-full lg:w-full lg:h-full -z-10 object-cover"
              src="https://i.ibb.co/WpkLKHy/oil.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-[360px] md:w-[768px] h-[350px] lg:w-full lg:h-[555px] ">
            <img
              className="cursor- w-full h-full lg:w-full lg:h-full -z-10 object-cover"
              src="https://i.ibb.co/ZzK8h8h/16516.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-[360px] md:w-[768px] h-[350px] lg:w-full lg:h-[555px] ">
            <img
              className="cursor- w-full h-full lg:w-full lg:h-full -z-10 object-cover"
              src="https://i.ibb.co/0Fjcgww/h26090.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-[360px] md:w-[768px] h-[350px] lg:w-full lg:h-[555px] ">
            <img
              className="cursor- w-full h-full lg:w-full lg:h-full -z-10 object-cover"
              src="https://i.ibb.co/Hpqq24R/blob.jpg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

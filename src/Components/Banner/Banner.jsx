import { useRef } from "react";
import { Slide } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
          <div className="flex w-[360px] md:w-[768px] items-center justify-start h-[350px] lg:w-full lg:h-[555px] relative">
            <div className="absolute flex backdrop-blur-sm bg-white/30 flex-col w-[360px] lg:w-[500px] lg:ml-10 p-5 rounded-md">
              <h2 className=" text-3xl text-black font-medium">
                Acrylic Portrait Canvas
              </h2>
              <p className="text-slate-800">
                Acrylic Portrait Canvas: Vibrant colors and fine details bring
                subjects to life on a durable, textured surface for lasting
                visual impact.
              </p>
            </div>
            <img
              className="cursor- w-full h-full lg:w-full lg:h-full -z-10 object-cover"
              src="https://i.ibb.co/G0ZspH8/pexels-thatguycraig000-1670043.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-[360px] md:w-[768px] items-center justify-start h-[350px] lg:w-full lg:h-[555px] relative">
            <Slide>
              <div className="absolute flex backdrop-blur-sm bg-white/30 flex-col w-[360px] lg:w-[500px] lg:ml-10 p-5 rounded-md">
                <h2 className=" text-3xl text-black font-medium">
                  Abstract Oil Painting
                </h2>
                <p className="text-slate-800">
                  Abstract oil painting explores form, color, and emotion
                  through non-representational compositions, inviting viewers to
                  interpret subjective meanings and connections.
                </p>
              </div>
            </Slide>
            <img
              className="cursor- w-full h-full lg:w-full lg:h-full -z-10 object-cover"
              src="https://i.ibb.co/hBfRpdZ/pexels-steve-1070534.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-[360px] md:w-[768px] items-center justify-start h-[350px] lg:w-full lg:h-[555px] relative">
            <Slide>
              <div className="absolute flex backdrop-blur-sm bg-white/30 flex-col w-[360px] lg:w-[500px] lg:ml-10 p-5 rounded-md">
                <h2 className=" text-3xl text-black font-medium">
                  Floral Watercolor Art
                </h2>
                <p className="text-slate-800">
                  Floral watercolor art: delicate blooms painted with
                  translucent watercolors, capturing the beauty and ephemeral
                  essence of flowers in vivid hues.
                </p>
              </div>
            </Slide>
            <img
              className="cursor- w-full h-full lg:w-full lg:h-full -z-10 object-cover"
              src="https://i.ibb.co/D1zXxXP/97f681ed80d517ba5a97eda8c13f4366.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-[360px] md:w-[768px] items-center justify-start h-[350px] lg:w-full lg:h-[555px] relative">
            <Slide>
              <div className="absolute flex backdrop-blur-sm bg-white/30 flex-col w-[360px] lg:w-[500px] lg:ml-10 p-5 rounded-md">
                <h2 className=" text-3xl text-black font-medium">
                  Mountain view canvas
                </h2>
                <p className="text-slate-800">
                  Mountain View Canvas offers durable canvas products for
                  outdoor use, including tents, tarps, and covers, crafted with
                  quality materials and craftsmanship.
                </p>
              </div>
            </Slide>

            <img
              className="cursor- w-full h-full lg:w-full lg:h-full -z-10 object-cover"
              src="https://i.ibb.co/bXcGcJF/OIP.jpg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

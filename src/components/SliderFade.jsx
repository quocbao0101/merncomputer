import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { EffectFade, Navigation ,Pagination } from "swiper";

export default function SliderFade({ data }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className='w-full'
      >
        {data.map((slider, index) => (
            <SwiperSlide className='pt-0 pb-0 w-full h-full' key={[index]}>
                <img src={slider.url} alt={[index]} />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

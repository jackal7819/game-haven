'use client'

import HeroCard from "@/components/Main/Hero/components/HeroCard";
import {games} from "@/data";
import React, {useRef, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import CustomPagination from "@/components/Main/Hero/components/CustomPagination";
import {useMedia} from "@/hooks/useMedia";


const HeroMain = () => {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const {deviceType} = useMedia()

  const onBulletClick = (index:number) => {
    if (swiperRef.current){
      swiperRef.current.slideTo(index);
      setActiveIndex(index)
    }
  };

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  return <section>
    <div className="relative mb-10 md:mb-20 ">
      <Swiper
        direction={( deviceType === "sm" || deviceType === "md") ? 'horizontal' : 'vertical'}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setTotalSlides(swiper.slides.length);
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        speed={700}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Pagination, Autoplay ]}
        spaceBetween={1}
        slidesPerView={1}
        className="lg:h-[491px] xl:h-[506px] 2xl:h-[570px] 3xl:h-[665px] 4xl:h-[760px]"
      >
        {games.slice(0, 5).map(game => (
          <SwiperSlide key={game.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <HeroCard
              image={game.image}
              title={game.title}
              description={game.description}
              price={game.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <CustomPagination
        totalSlides={totalSlides}
        activeIndex={activeIndex}
        onBulletClick={onBulletClick}/>
    </div>

  </section>;
};

export default HeroMain;

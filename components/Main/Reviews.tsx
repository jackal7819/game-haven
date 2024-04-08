"use client";

import Link from "next/link";
import { useRef } from "react";
import { useMedia } from "@/hooks/useMedia";
import { reviewsData } from "@/reviewsData";
import { GoChevronRight } from "react-icons/go";
import ReviewItem from "@/components/Main/ReviewItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { NavigationOptions, ScrollbarOptions } from "swiper/types";
import { register } from "swiper/element/bundle";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

register();

const Reviews = () => {
  const { deviceType } = useMedia();
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);
  const scrollbarRef = useRef(null);

  const btnStyles =
    "rounded-[32px] p-3 w-14 h-14 bg-orange disabled:border disabled:border-orange disabled:bg-transparent disabled:text-orange";

  return (
    <div className="md:container mb-40">
      <div className="max-md:container flex justify-between items-center mb-14">
        <h2 className="xl:text-[40px] text-[32px] font-medium font-orbitron">
          Reviews
        </h2>
        {/* DESKTOP LINK */}{" "}
        <Link
          href="/"
          className="items-center justify-center hidden gap-2 px-4 py-4 text-transparent duration-300 border rounded-lg md:flex border-b-light-blue w-44 h-14 border-r-blue border-t-blue border-l-light-blue hover:border-r-light-blue hover:border-b-blue hover:border-l-blue hover:border-t-light-blue group"
        >
          <span className="text-xl bg-gradient-to-r from-blue to-light-blue bg-clip-text group-hover:bg-gradient-to-l">
            See more
          </span>
          <GoChevronRight
            size={24}
            className="mt-[3px] text-blue group-hover:text-light-blue"
          />{" "}
        </Link>{" "}
        {/* MOBILE LINK */}{" "}
        <Link href="/" className="md:hidden">
          {" "}
          <GoChevronRight
            size={24}
            className="mt-[3px] text-blue hover:text-light-blue"
          />{" "}
        </Link>
      </div>
      <div className="relative swiperMobile">
        <Swiper
          observer={true}
          className="mb-12 "
          modules={[Scrollbar, Navigation]}
          spaceBetween={32}
          slidesPerView={2}
          navigation={{
            prevEl: navPrevRef.current,
            nextEl: navNextRef.current,
          }}
          scrollbar={{
            el: scrollbarRef.current,
            draggable: true,
            dragClass: "swiper-scrollbar-drag !bg-light-blue !rounded",
          }}
          onSwiper={(swiper) => {
            console.log(swiper);
          }}
          onResize={(swiper) => {
            swiper.allowTouchMove = deviceType === "md" || deviceType === "sm";
            swiper.params.slidesPerView = deviceType === "sm" ? 1.5 : 2;
          }}
          allowTouchMove={false}
          onBeforeInit={(swiper) => {
            const navigation = swiper.params.navigation as NavigationOptions;
            const scrollbar = swiper.params.scrollbar as ScrollbarOptions;
            navigation.prevEl = navPrevRef.current;
            navigation.nextEl = navNextRef.current;
            scrollbar.el = scrollbarRef.current;
            swiper.allowTouchMove = deviceType === "md" || deviceType === "sm";
            swiper.params.slidesPerView = deviceType === "sm" ? 1.5 : 2;
          }}
        >
          {reviewsData.map((item) => {
            return (
              <SwiperSlide key={item.id} className=" self-stretch">
                {" "}
                <ReviewItem item={item} />{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          ref={navPrevRef}
          className={`${btnStyles} hidden lg:block absolute top-1/2 -left-2 2xl:-left-4 3xl:-left-14 transform -translate-x-full -translate-y-1/2 z-20`}
        >
          &#60;
        </button>
        <button
          ref={navNextRef}
          className={`${btnStyles} hidden lg:block absolute top-1/2 -right-2 2xl:-right-4 3xl:-right-14 transform translate-x-full -translate-y-1/2 z-20`}
        >
          &#62;
        </button>
      </div>
      <div
        ref={scrollbarRef}
        className="container w-auto md:w-3/5 lg:w-2/5 xl:w-1/3 2xl:w-1/4 h-2  rounded bg-light"
      ></div>
    </div>
  );
};

export default Reviews;

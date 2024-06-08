"use client";

import { newsData } from "@/newsData";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useMedia } from "@/hooks/useMedia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import type { Swiper as ISwiper } from "swiper";
import * as Reactions from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { CiPaperplane } from "react-icons/ci";
import New from "@/components/News/New";

const NewsCardPage = ({ params }: { params: { id: string } }) => {
  const [swiper, setSwiper] = useState<ISwiper | null>(null);
  const { deviceType } = useMedia();
  const scrollbarRef = useRef(null);
  const { id } = params;
  const newsCard = newsData.find((e) => e.id === +id);
  const alsoLike = [];
  newsData.map((e) => {
    if (alsoLike.length < 3 && e.id !== newsCard.id) {
      alsoLike.push(e);
    }
  });

  const slidesPerViewLookup = {
    sm: 1.4,
    md: 1.2,
    lg: 1.6,
    xl: 1.8,
    "2xl": 2.3,
    "3xl": 2.7,
    "4xl": 3.2,
  };

  useEffect(() => {
    setSwiperParams(swiper);
  }, [deviceType]);

  function setSwiperParams(swiper: ISwiper | null) {
    if (swiper) {
      swiper.params.spaceBetween = deviceType === "sm" ? 8 : 24;
      swiper.params.centeredSlides = deviceType !== "sm";
      // @ts-ignore
      swiper.params.slidesPerView = slidesPerViewLookup[deviceType] || 1;
    }
  }

  return (
    <>
      <div className="container mb-20 md:mb-40">
        <div className="mb-8 md:mb-14 mt-10 md:mt-20">
          <h2 className="text-[32px] xl:text-[40px] leading-8 xl:leading-10 font-medium mb-4 font-orbitron">
            {newsCard?.title}
          </h2>
          <p className="leading-4 mb-4">
            {newsCard?.publicationDate}{" "}
            <Link href="#" className="text-light-blue ml-3">
              by {newsCard?.author}
            </Link>
          </p>
          <div className="flex flex-wrap gap-1 md:gap-4">
            {newsCard?.tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className="leading-5 px-3 py-2 rounded-2xl border border-light-blue xl:text-xl xl:leading-6"
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse gap-6">
          <div>
            <Image
              className="rounded-2xl w-full h-auto"
              src={newsCard?.img ? newsCard.img : "/gta.jpg"}
              alt={newsCard?.title ? newsCard.title : ""}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <p className="whitespace-pre-wrap leading-5 flex-[1_0_50%] xl:flex-[1_0_60%] xl:text-xl xl:leading-6">
            {newsCard?.text}
          </p>
        </div>
      </div>
      <div>
        <h2 className="container text-[32px] xl:text-[40px] leading-8 xl:leading-10 font-medium font-orbitron mb-8">
          Visuals
        </h2>
        <Swiper
          onSwiper={setSwiper}
          className="mb-10 md:ml-20"
          observer={true}
          modules={[Scrollbar]}
          spaceBetween={8}
          slidesPerView={1.4}
          loop={true}
          centeredSlides={true}
          scrollbar={{
            el: scrollbarRef.current,
            draggable: true,
            dragClass: "swiper-scrollbar-drag !bg-light-blue !rounded",
          }}
        >
          {newsCard?.media.map((item, index) => {
            return (
              <SwiperSlide key={index} className=" !h-auto !flex !flex-col">
                <Image
                  className="rounded-2xl w-full h-auto"
                  src={item}
                  alt={item}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          ref={scrollbarRef}
          className="w-auto md:mx-auto md:w-[384px] h-2  rounded bg-light mb-8 md:mb-14"
        />
        <div className="container flex gap-2 md:gap-8 mb-20">
          {newsCard?.reactions.map((item) => {
            const Reaction = Reactions[item.reaction];
            return (
              <div
                key={item.reaction}
                className="rounded-[32px] border border-light-blue px-4 py-1 flex justify-center items-center text-orange gap-2 md:gap-3 active:bg-light text-xl leading-5 hover:cursor-pointer"
              >
                <Reaction size={deviceType === "sm" ? 28 : 48} />
                {item.count}
              </div>
            );
          })}
          <div className="rounded-[32px] border border-light-blue px-7 py-1 flex justify-center items-center text-orange text-xl leading-5 hover:cursor-pointer">
            <FaPlus size={deviceType === "sm" ? 10 : 15} />
          </div>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-20">
        <div className="text-light rounded-[60px] bg-orange p-4">
          <Reactions.CiUser size={48} />
        </div>
        <div className="flex gap-2 md:gap-6 self-stretch md:grow">
          <textarea
            className="rounded-lg p-4 bg-light grow text-black"
            placeholder="Write comment here..."
          />
          <CiPaperplane className="text-orange" size={48} />
        </div>
      </div>
      <div className="container">
        <h2 className="text-[32px] xl:text-[40px] leading-8 xl:leading-10 font-medium font-orbitron mb-8">
          You probably also gonna like
        </h2>
        <div>
          {alsoLike.map((item) => {
            return <New key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default NewsCardPage;

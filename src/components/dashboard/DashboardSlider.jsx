import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slider1 from "../../images/slider1.png";

function DashboardSlider() {
  const sliderData = [
    {
      img: slider1,
      text: " GMP certification, GMP location and sale of the last plants",
      footer: "Posted on: letzten Freitag um 22:00 Uhr",
    },
    {
      img: slider1,
      text: " Construction Progress and Update of the final Start dates of the Grow Rooms ",
      footer: "Posted on: 21.08.2022",
    },
    {
      img: slider1,
      text: "  Update of all Grow Rooms at both locations, Fraubrunnen and Solothurn ",
      footer: "Posted on: 21.08.2022",
    },
    {
      img: slider1,
      text: " Cannerald Telegram Channel has been deleted ",
      footer: "Posted on: 21.08.2022",
    },
  ];

  return (
    <div className="mt-12">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          510: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {sliderData.map((el, i) => (
          <SwiperSlide key={i}>
            <div className="h-full">
              <a
                href="https://backend.cannergrow.com/dashboard"
                className="block my-shadow-1 border-l-4 my-border-1 h-full"
              >
                <div className="flex h-full flex-col">
                  <div>
                    <img className="w-full" src={el.img} alt="" />
                  </div>
                  <div className="font-bold pt-4 px-4 bg-white flex-auto pb-2.5 text-center">
                    {el.text}
                  </div>
                  <p className="bg-[#8A8A8A] px-2 text-center text-white py-2">
                    {el.footer}
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DashboardSlider;

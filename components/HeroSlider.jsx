"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const slides = [
    {
      title: "Latest Smartphones",
      text: "Discover the latest smartphones at the best price.",
      image: "/images/banners/banner-1.jpg",
    },
    {
      title: "Premium Electronics",
      text: "Everything you need for your home and devices.",
      image: "/images/banners/banner-2.jpg",
    },
    {
      title: "Special Offers",
      text: "Grab amazing deals from Asia Electronics.",
      image: "/images/banners/banner-3.jpg",
    },
  ];

  return (
    <section>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[450px] md:h-[550px] bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/50" />

              <div className="relative z-10 h-full max-w-7xl mx-auto px-5 flex items-center">
                <div className="text-white max-w-xl">
                  <p className="text-[#415FFF] bg-white inline-block px-4 py-2 rounded-full font-semibold mb-5">
                    Asia Electronics
                  </p>

                  <h1 className="text-4xl md:text-6xl font-black mb-5">
                    {slide.title}
                  </h1>

                  <p className="text-lg mb-8">
                    {slide.text}
                  </p>

                  <a
                    href="/products"
                    className="inline-block bg-[#415FFF] px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
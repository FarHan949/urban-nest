import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner_1 from "../../../../public/banner-1.jpg";
import banner_2 from "../../../../public/banner-2.jpg";
import banner_3 from "../../../../public/banner-3.jpg";

const Banner = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Pagination]}
      className="mySwiper"
      loop={true}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      spaceBetween={30}
    >
      <SwiperSlide>
        <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-screen">
          <img
            src={banner_1}
            className="absolute top-0 left-0 w-full h-full object-cover blur"
            alt="Townhouse Banner 1"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8">
            <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold text-gold text-center">
              Welcome to Your Dream Townhouse!
            </h2>
            <p className="text-sm sm:text-lg md:text-xl mt-10 sm:mt-10 text-white bg-black bg-opacity-20 p-4 sm:p-6 rounded-lg shadow-lg text-center">
              Experience the perfect blend of style, comfort, and convenience.
              Our thoughtfully designed townhouses offer spacious layouts,
              modern amenities, and premium finishes to elevate your living
              experience. Whether you're looking for a serene neighborhood, easy
              access to city life, or a cozy space for your family, your dream
              home awaits. Start exploring now and make your vision a reality!
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-screen">
          <img
            src={banner_2}
            className="absolute top-0 left-0 w-full h-full object-cover blur"
            alt="Townhouse Banner 2"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8">
            <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold text-gold text-center">
              Discover Your Perfect Home!
            </h2>
            <p className="text-sm sm:text-lg md:text-xl mt-10 sm:mt-10 text-white bg-black bg-opacity-20 p-4 sm:p-6 rounded-lg shadow-lg text-center">
              Redefined Step into sophistication and comfort with our exclusive
              collection of townhouses. From sleek modern designs to
              family-friendly layouts, we have a home that fits your lifestyle.
              Discover vibrant communities, luxurious spaces, and the perfect
              place to create lasting memories. Your dream townhouse is just a
              click away!
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-screen">
          <img
            src={banner_3}
            className="absolute top-0 left-0 w-full h-full object-cover blur"
            alt="Townhouse Banner 3"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8">
            <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold text-gold text-center">
            Find Your Perfect Place to Call Home
            </h2>
            <p className="text-sm sm:text-lg md:text-xl mt-10 sm:mt-10 text-white bg-black bg-opacity-20 p-4 sm:p-6 rounded-lg shadow-lg text-center">
              Imagine a life where everything you need is within reach. Our
              townhouses are designed to offer seamless living with stylish
              interiors, smart features, and prime locations. Whether you’re a
              first-time buyer or looking for an upgrade, we’ll help you find
              the home you’ve always dreamed of. Start your journey today!
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./MinistriesSlidesImgs.css";
import { Navigation } from "swiper/modules";

/**
 * Component to display an image slider.
 * @param {Array} images - Array of image URLs to be displayed.
 * @param {string} img - URL of the fallback image to be displayed if no images are provided.
 * @returns {JSX.Element} - Returns a JSX element representing the image slider.
 */
export default function MinistriesSlidesImgs({ images = [], img ,title }) {
    // console.log(title);
  if (!Array.isArray(images) || images.length === 0) {
    // If images array is empty, display the fallback image
    return (
      <div className="relative flex justify-center items-center w-full h-full mx-auto rounded-md">
        <img
          src={img}
          alt={`No images available, here goes the image of ${title}`}
          className="object-cover z-40 w-full lg:h-full h-[24rem]  mx-auto rounded-md filter saturate-100"
        />
        <h3 className="absolute  flex items-center justify-center text-black text-center  p-4">
          No images available, here goes the image of {title}
        </h3>
      </div>
    );
  }

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="relative w-full  h-full  flex"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="relative">
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="object-cover w-full h-full lg:h-[24rem] mx-auto rounded-md filter saturate-100"
          />
          {/* Text overlay
          <h3 className="absolute inset-0 flex items-center justify-center text-white text-center z-40 bg-black bg-opacity-50 p-4">
            We can put one or more images of you if you want
          </h3> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { ministries } from "../../api/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./styles.css";

// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Title from "../Title";
import Titles2 from "../Titles2";

function CarruselMinisterios() {
  return (
    <>
      <section className="lg:px-4 ">
        <Title title="Ministerios" />
        <Swiper
         style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          slidesPerView={3} // Muestra 3 diapositivas por defecto
          spaceBetween={30} // Espaciado entre diapositivas
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            // Configuración para pantallas móviles
            0: {
              slidesPerView: 1, // Muestra 1 diapositiva
              spaceBetween: 10,
            },
            // Configuración para pantallas medianas
            768: {
              slidesPerView: 2, // Muestra 2 diapositivas
              spaceBetween: 20,
            },
            // Configuración para pantallas grandes
            1024: {
              slidesPerView: 3, // Muestra 3 diapositivas
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {ministries.map((ministry, index) => (
            <SwiperSlide
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Imagen */}
              <div
                className="h-[370px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${ministry.img})`,
                }}
              >
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black bg-opacity-30"></div>
              </div>

              {/* Contenido */}
              <div className="p-4 text-left absolute top-[1rem] z-50">
                <Titles2 title={ministry.name} />
                {ministry.subTitle && (
                  <div className="subtitle text-lg font-semibold mt-2">
                    {ministry.subTitle}
                  </div>
                )}
                <p className="text-sm mt-2">{ministry.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default CarruselMinisterios;

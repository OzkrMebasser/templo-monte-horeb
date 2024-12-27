"use client";
import "../globals.css";

import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${"/assets/egypt-sinai-mountains.webp"})`,
      }}
    >
      {/* Overlay semi-transparente */}
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#6e55467c] opacity-75 z-0"></div>

      {/* SVG Overlay */}
      <img
        src={"/assets/bg-body-white.svg"}
        alt="SVG Overlay"
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover z-10 opacity-90"
      />

      <main className="px-4 sm:px-6 lg:px-8 z-20 mt-20 py-8">
        <div className="text-center">
          <h2 className=" text-shadows uppercase font-bold text-4xl tracking-tight leading-10  sm:text-5xl text-white sm:leading-none md:text-6xl">
            <span
              data-aos="zoom-in-up"
              className="text-[2rem] text-[#a09a6a] font-bold"
            >
              Templo <br className="" />
            </span>{" "}
            <span data-aos="zoom-in-up">Monte Horeb</span>
          </h2>
          <p
            data-aos="zoom-in-up"
            className="lobster-regular text-shadows mt-3 text-[#a09a6a] text-[1.5rem] lg:text-[2rem] sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5"
          >
            Iglesia evangélica{" "}
          </p>
          <div className="mt-5 sm:mt-4 flex justify-center mx-auto">
            <img
              data-aos="zoom-in-down"
              className="h-[8rem] w-[8rem] logo-shadow"
              // src="https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2FCNAD_logo.png?alt=media&token=a0d70106-5817-4711-954c-3e2b14207c80"
              src="/assets/CNAD_logo.png"
              alt="Logo Asambleas de Dios"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;

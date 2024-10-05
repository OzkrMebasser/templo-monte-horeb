"use client";


import React from 'react';

const bgImage = "https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2Fegypt-sinai-01.jpg?alt=media&token=90f2178a-1b91-47df-afdd-156bedc081bf"

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#6e55467c] opacity-75"></div>
      
      <main className="px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h2 className=" uppercase font-bold text-4xl tracking-tight leading-10  sm:text-5xl text-white sm:leading-none md:text-6xl">
            <span className="text-[#a09a6a] font-bold">Templo</span> <span>Monte Horeb</span>
          </h2>
          <p className="mt-3 text-[red] text-[2rem] sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
           Iglesia Evangelica 
          </p>
          {/* <div className="mt-5 sm:mt-8 sm:flex justify-center">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10">
                Get started
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:px-10">
                Live demo
              </a>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default HeroSection;

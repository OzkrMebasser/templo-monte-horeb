"use client";
import { useEffect } from "react";
// import aos
import Aos from "aos";
import "aos/dist/aos.css";

import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import Map from "./components/Map";
import Footer from "./components/Footer";
import CarruselMinisterios from "./components/Carruseles/CarruselMinisterios";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2500, delay: 400 });
  }, []);
  return (
    
    <>
   
      <HeroSection />
      <CarruselMinisterios/>
      <Map/>
    
    </>
  
  );
}

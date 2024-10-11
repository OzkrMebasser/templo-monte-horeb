"use client";

import Title from "./Title";

const Map = () => {
  return (
    <>
      <div className=" mx-auto bg-[#fff]" >
     <Title/>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.7309073975985!2d-75.9841277!3d21.022169200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ecdbb113ab78fe7%3A0xa9f306e18c2ff767!2sIglesia%20Evang%C3%A9lica%20Pentecostal%20de%20Cuba%20%22Asambleas%20de%20Dios%22!5e1!3m2!1sen!2sca!4v1728683535652!5m2!1sen!2sca"
          className="border-0 w-full h-[450px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default Map;

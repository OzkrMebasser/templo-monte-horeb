"use client";

import Title from "./Title";

const Map = () => {
  return (
    <>
      <div className=" mx-auto bg-[transparent]">
        <Title title={"Nuestra ubicación"}/>
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d728.6268322275214!2d-75.98401570547955!3d21.022004102471318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDAxJzE5LjQiTiA3NcKwNTknMDIuNCJX!5e1!3m2!1sen!2sca!4v1728704827607!5m2!1sen!2sca" 
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

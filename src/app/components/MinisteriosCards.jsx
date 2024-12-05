"use client";
import React from "react";
import Title from "./Title";
import Link from "next/link";
import { ministries } from "../api/data";


const MinistryCard = ({ name, description, subTitle, img, pageLink }) => (
  <div className="border-[1px] text-[#a09a6a] hover:text-black bg-white border-[#a09a6a50] hover:border-[#a09a6a] max-w-sm px-6 pt-6 pb-4 rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
    <div className="h-[4rem]">
      {" "}
      <h3 className=" text-xl font-bold   uppercase titles">{name}</h3>
      <p className=" text-[#a09a6a] tracking-tighter ">{subTitle}</p>
    </div>
    <div className="relative overflow-hidden rounded-xl max-h-[210px] ">
      <img
        className="object-contain w-full opacity-60 rounded-xl hover:scale-[1.2] hover:duration-700 ease-in-out hover:opacity-100  "
        src={img}
        alt={name}
      />
    </div>
    <div className="h-[100px] mt-6 ">
      <p className=" text-[black] align-middle text text-justify">
        {description}
      </p>
    </div>

    <button
      href="#"
      className="flex mt-2 mb-4  w-full overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#a09a6a] via-[#646043] to-[#807a55] text-white shadow hover:bg-[#a09a6a]/90 h-12 px-4 py-2  whitespace-pre md:flex group relative justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-[#535036] hover:ring-offset-2"
    >
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
      <div className="flex items-center">
        <Link href={pageLink}> 
        <span className="ml-1 titles text-[#ffffff] text-[1rem] uppercase font-semibold">
          Saber más
        </span>
        </Link>
      </div>
      <div className="ml-2 flex items-center gap-1 text-sm md:flex"></div>
    </button>
  </div>
);

const MinistriesList = () => (
  <>
    <div className=" pt-[6rem] ">
      <Title title={"Ministerios"} />

      <div className="min-h-screen bg-transparent flex justify-center items-center pb-10 px-4 lg:px-0">
        <div className=" md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-12 md:space-y-0">
          {ministries.map((ministry) => (
            <MinistryCard
              key={ministry.name}
              name={ministry.name}
              description={ministry.description}
              subTitle={ministry.subTitle}
              img={ministry.img}
              pageLink={`/ministerios/${ministry.pageLink}`} 
            />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default MinistriesList;

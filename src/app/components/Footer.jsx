"use client";
import React from "react";
import Link from "next/link";
import { footerInfo } from "../api/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Destructuracion de los datos del objeto `footerInfo`
  const [
    sections,
    schedules,
    ministryName,
    ministryPageLink,
    contactInfo,
    media,
  ] = footerInfo.map((item) => Object.values(item)[0]);

  // Dividir los ministerios y enlaces en dos grupos de 7
  const ministriesGroup1 = ministryName[0].slice(0, 7);
  const ministriesGroup2 = ministryName[0].slice(7, 15);
  const linksGroup1 = ministryPageLink[0].slice(0, 7);
  const linksGroup2 = ministryPageLink[0].slice(7, 15);

  return (
    <div
      className="w-full text-[#000000] py-10 px-4"
      style={{ backgroundImage: `url("/assets/footer-BG.svg")` }}
    >
      {/* Contenido Principal */}
      <div className="w-full  lg:px-16 mx-auto grid grid-cols-2 md:grid-cols-4 md:gap-4 border-b-2 border-[#000000] py-8">
        {/* Sección: Ministerios */}
        <div className="text-left ">
          <h6 className="font-bold uppercase pt-2 [text-shadow:_0_1px_3px_rgb(110_106_76_/_60%)]">
            {sections[0]}
          </h6>
          <ul>
            {ministriesGroup1.map((name, index) => (
              <li key={index} className="py-1">
                <Link
                  href={
                    linksGroup1[index].startsWith("ministerios")
                      ? linksGroup1[index]
                      : `ministerios${linksGroup1[index]}`
                  }
                >
                  <span className="text-[#f8f8f8] hover:text-black transition-colors duration-300 [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)] font-display text-sm leading-tight">
                    {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sección: + Ministerios */}
        <div className="text-left lg:pl-[2rem]">
          <h6 className="font-bold uppercase pt-2 [text-shadow:_0_1px_3px_rgb(110_106_76_/_60%)]">
            {sections[1]}
          </h6>
          <ul>
            {ministriesGroup2.map((name, index) => (
              <li key={index} className="py-1">
                <Link
                  href={
                    linksGroup2[index].startsWith("ministerios")
                      ? linksGroup2[index]
                      : `ministerios${linksGroup2[index]}`
                  }
                >
                  <span className="text-[#f8f8f8] hover:text-black transition-colors duration-300 [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)] font-display text-sm leading-tight">
                    {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sección: Horarios */}
        <div className="text-left lg:pl-[4rem]">
          <h6 className="font-bold uppercase pt-2 [text-shadow:_0_1px_3px_rgb(110_106_76_/_60%)]">
            {sections[2]}
          </h6>
          <ul>
            {schedules.map((schedule, index) => (
              <li key={index} className="py-1">
                <span className="text-[#f8f8f8] hover:text-black transition-colors duration-300 [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)] font-display text-sm leading-tight">
                  {schedule === "Domingo - 9:00 am" ? (
                    <>
                      {schedule} <br /> (Escuela Dominical)
                    </>
                  ) : (
                    schedule
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sección: Contacto */}
        <div className="text-left lg:pl-[8rem] ">
          <h6 className="font-bold uppercase pt-2 [text-shadow:_0_1px_3px_rgb(110_106_76_/_60%)]">
            {sections[3]}
          </h6>
          <ul>
            {contactInfo.map((item, index) => (
              <a
                href={`${item.contactOutput}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li key={index} className="py-1">
                  <span className="text-[#f8f8f8] hover:text-black transition-colors duration-300 [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)] font-display text-sm leading-tight">
                    <item.icon size="18" className="inline mr-4" />
                    {item.contactTitle}
                  </span>
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>

      {/* Pie de Página */}
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-[#fff]">
        <p className="py-4">
          Templo Monte Horeb &copy; {currentYear}
          <br />
          <a
            href="https://oscarmorenodev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-thin text-[0.6rem] mx-auto ml-3 lg:ml-0"
          >
            Made with &#x1F9E1; by Ozkr Mebasser
          </a>
        </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {media.map((x, index) => (
            <a
              href={x.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="mx-4 hover:text-white"
            >
              <x.icon size="28" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

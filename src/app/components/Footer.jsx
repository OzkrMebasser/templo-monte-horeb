"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const sections = [
  {
    title: "Ministerios",
    items: [
      "Hombres esforzados",
      "Jóvenes",
      "Castillo del rey (juveniles)",
      "Femeniles",
      "Evangelismo",
      "Misionero",
      "Capellanía",
    ],
  },
  {
    title: "+ Ministerios",
    items: [
      "Deborah (madres en clamor)",
      "Demaad (música, danza y actuación)",
      "Educación cristiana (escuela dominical)",
      "Vida joven (alcanzando un joven más)",
      "Llevando luz (ayuda a los débiles visuales)",
      "Oración y guerra espiritual",
    ],
  },

  {
    title: "Servicios",
    items: ["Lunes -- 7:00 pm", "Jueves -- 7:00 pm ", "Domingo -- 10:00 am "],
  },
  {
    title: "Contacto",
    items: ["Correo", "Telefono", "WhatsApp"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Youtube", icon: FaYoutube, link: "https://www.youtube.com/" },

];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full  bg-[#a09a6a] text-[#ffffff] py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 md:gap-4 border-b-2 border-[#000000] py-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className={index < 2 ? "text-left" : "text-left lg:text-right"}
          >
            <h6 className="font-bold uppercase pt-2 [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)]">
              {section.title}
            </h6>
            <ul>
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="font-display max-w-sm text-sm font-bold leading-tight py-1"
                >
                  <span className="link link-underline link-underline-black text-black">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-[#fff]">
        <p className="py-4">
          {" "}
          Templo Monte Horeb &copy; {currentYear} <br />
          <a
            href="https://oscarmorenodev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-thin text-[.6rem] mx-auto ml-3 lg:ml-0"
          >
            Made with &#x1F9E1; by Ozkr Mebasser
          </a>{" "}
        </p>

        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {items.map((x, index) => {
            return(
                <a
                  href={x.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="mx-4 hover:text-white"
                >
                  <x.icon size="28" />
                </a>
  
            );
            
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;

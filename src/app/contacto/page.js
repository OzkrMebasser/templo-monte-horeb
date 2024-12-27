"use client";
import React, { useRef } from "react";
import { BiMailSend } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import Title from "../components/Title";
import "../globals.css";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0001lfs",
        "template_02ypadr",
        form.current,
        "rZ6_7d53He4pfv50b"
      )
      .then(
        (result) => {
          console.log("Mensaje enviado con éxito:", result.text);
          alert("¡Mensaje enviado con éxito!");
        },
        (error) => {
          console.log("Error al enviar el mensaje:", error.text);
          alert("Error al enviar el mensaje.");
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className=" pt-[6rem] ">
        <Title title="Contáctanos" />

        {/* Form Section */}
        <div className="container mx-auto pb-[100px] lg:px-16 ">
          <div className="shadow-[0px_0px_20px_1px_#718096] rounded-lg grid grid-cols-1 lg:grid-cols-2  ">
            {/* Left Side Image */}
            <div className="flex justify-center h-[500px] lg:h-[780px]">
              <img
                className="sm:rounded-l-lg lg:rounded-l-lg object-cover w-full h-full"
                src="/assets/contactanos.webp"
                alt="Templo Monte Horeb"
              />
            </div>

            {/* Right Side Form */}
            <div className="flex items-center justify-center  lg:rounded-r-lg py-[30px] lg:py-[50px] bg-white">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="w-full h-full px-4 lg:px-8 lg:pt-[40px]  lg:rounded-lg "
              >
                {/* Full Name */}
                <div className="mb-8">
                  <label
                    htmlFor="name"
                    className="block text-lg font-bold mb-2 titles text-[#a09a6a]"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Ingresa tu nombre completo"
                    required
                    className="w-full rounded-md border border-gray-300 py-3 px-4 text-gray-700 focus:border-[#a09a6a] focus:outline-none"
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-8">
                  <label
                    htmlFor="phone"
                    className="block text-lg font-bold mb-2 titles text-[#a09a6a]"
                  >
                    Numero de Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Ingresa tu número de teléfono"
                    required
                    className="w-full rounded-md border border-gray-300 py-3 px-4 text-gray-700 focus:border-[#a09a6a] focus:outline-none"
                  />
                </div>

                {/* Email Address */}
                <div className="mb-8">
                  <label
                    htmlFor="email"
                    className="block text-lg font-bold mb-2 titles text-[#a09a6a]"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Ingresa tu correo electrónico"
                    required
                    className="w-full rounded-md border border-gray-300 py-3 px-4 text-gray-700 focus:border-[#a09a6a] focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div className="mb-8 lg:mb-16">
                  <label
                    htmlFor="message"
                    className="block text-lg font-bold mb-2 titles text-[#a09a6a]"
                  >
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    laceholder="Escribe tu mensaje aquí"
                    required
                    className="w-full rounded-md border border-gray-300 py-3 px-4 text-gray-700 focus:border-[#a09a6a] focus:outline-none"
                  ></textarea>
                </div>

                {/* Submit Button */}

                <button
                  type="submit"
                  className="flex mt-2 mb-4  w-full overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#a09a6a] via-[#646043] to-[#807a55] text-white shadow hover:bg-[#a09a6a]/90 h-12 px-4 py-2  whitespace-pre md:flex group relative justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-[#535036] hover:ring-offset-2"
                >
                  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                  <div className="flex items-center">
                    <span className="ml-1 titles text-[#ffffff] text-[1rem] uppercase font-semibold">
                      <p className="inline mr-4"> Enviar mensaje</p>
                      <BiMailSend className="  mb-1 inline h-5 w-5" />
                    </span>
                  </div>
                  <div className="ml-2 flex items-center gap-1 text-sm md:flex"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;

"use client";
import React, { useState } from "react";
import Link from 'next/link'
import { PiChurchDuotone } from "react-icons/pi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { CgCross } from "react-icons/cg";

const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#fff]  fixed z-50 w-full uppercase [box-shadow:_0_1px_3px_rgb(0_0_0_/_30%)]" >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2Flogo-MONTE-HOREB.gif?alt=media&token=3a3d75b7-0ffb-4a18-b9a9-fc35127401fb"
          className="h-[3.5rem] lg:h-[5rem] relative"
          alt="Logo"
        />
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className={
            `${!isMobileMenuOpen 
            ? "text-[#a09a6a] hover:text-[#fff] hover:bg-[#a09a6a]"
            : "text-[#a09a6a] border-2 border-[#a09a6a]"} 
            inline-flex items-center p-1 w-10 h-10 justify-center ]  rounded-lg md:hidden
            `
            }
         
          aria-controls="navbar-multi-level"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>

          {!isMobileMenuOpen ? (
            <PiChurchDuotone className="h-8 w-8  " />
          ) : (
            <CgCross className="h-8 w-8 rotate-[15deg]" />
          )}
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block " : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-multi-level"
        >
          <ul className="uppercase py-6 flex flex-col text-[#a09a6a] font-medium  md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {/* Inicio */}
            <li className="relative py-8 lg:py-0 font-semibold text-[#a09a6a] hover:text-[#8d8758] cursor-pointer transition-all ease-in-out md:before:transition-[width] md:before:ease-in-out md:before:duration-700 md:before:absolute md:before:bg-[#8d8758] md:before:origin-center md:before:h-[2px] md:before:w-0 md:hover:before:w-[50%] md:before:bottom-0 md:before:left-[50%] md:after:transition-[width] md:after:ease-in-out md:after:duration-700 md:after:absolute md:after:bg-[#8d8758] md:after:origin-center md:after:h-[2px] md:after:w-0 md:hover:after:w-[50%] md:after:bottom-0 md:after:right-[50%]">
         
              <Link href="/">Inicio</Link>
            </li>
            <li className="relative py-6 lg:py-0 font-semibold text-[#a09a6a] hover:text-[#8d8758] cursor-pointer transition-all ease-in-out md:before:transition-[width] md:before:ease-in-out md:before:duration-700 md:before:absolute md:before:bg-[#8d8758] md:before:origin-center md:before:h-[2px] md:before:w-0 md:hover:before:w-[50%] md:before:bottom-0 md:before:left-[50%] md:after:transition-[width] md:after:ease-in-out md:after:duration-700 md:after:absolute md:after:bg-[#8d8758] md:after:origin-center md:after:h-[2px] md:after:w-0 md:hover:after:w-[50%] md:after:bottom-0 md:after:right-[50%]">
              <Link href="/ministerios">Ministerios</Link>
            </li>
            {/* Ministerios Dropdown */}
            {/* <li className="uppercase py-6 lg:py-0  relative font-semibold text-[#a09a6a] hover:text-[#8d8758] cursor-pointer transition-all ease-in-out md:before:transition-[width] md:before:ease-in-out md:before:duration-700 md:before:absolute md:before:bg-[#8d8758] md:before:origin-center md:before:h-[2px] md:before:w-0 md:hover:before:w-[50%] md:before:bottom-0 md:before:left-[50%] md:after:transition-[width] md:after:ease-in-out md:after:duration-700 md:after:absolute md:after:bg-[#8d8758] md:after:origin-center md:after:h-[2px] md:after:w-0 md:hover:after:w-[50%] md:after:bottom-0 md:after:right-[50%]">
              <button
                id="dropdownNavbarLink"
                onClick={toggleDropdown}
                className="uppercase flex items-center justify-between w-full  md:border-0  md:p-0 md:w-auto "
              >
                Ministerios
                {isDropdownOpen ? (
                  <FaAngleUp className="w-5 h-5 ms-1 text-[#a09a6a] transition-all ease-in-out " />
                ) : (
                  <FaAngleDown className="w-5 h-5 ms-1 text-[#a09a6a] transition-all ease-in-out " />
                )}
              </button>
              {isDropdownOpen && (
                <div
                  id="dropdownNavbar"
                  className="z-50 lg:shadow-2xl absolute left-0 lg:-left-[10rem] -mt-[9rem] lg:mt-4 font-normal bg-white  rounded-lg w-[90%] lg:w-[33rem] dark:bg-[#a19b6d] dark:divide-gray-600  overflow-y-auto"
                  >
                  <ul className="py-2 text-sm text-[#ffffff] font-semibold ">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#ffffff] dark:hover:text-[#a19b6d]"
                      >
                        DE HOMBRES ESFORZADOS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#ffffff] dark:hover:text-[#a19b6d]"
                      >
                        DE JÓVENES
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#ffffff] dark:hover:text-[#a19b6d]"
                      >
                        CASTILLO DEL REY (Juveniles)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#ffffff] dark:hover:text-[#a19b6d]"
                      >
                        FEMENILES
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#ffffff] dark:hover:text-[#a19b6d]"
                      >
                        DE EVANGELISMO
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#ffffff] dark:hover:text-[#a19b6d]"
                      >
                        MISIONERO
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#ffffff] dark:hover:text-[#a19b6d]"
                      >
                        DE CAPELLANIA
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#ffffff] dark:hover:text-[#a19b6d]"
                      >
                         DEBORAH (Madres en Clamor)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#ffffff] dark:hover:text-[#a19b6d]"
                      >
                       DEL DEMAAD (Música, Danza y Actuación)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#ffffff] dark:hover:text-[#a19b6d]"
                      >
                        DE EDUCACIÓN CRISTIANA (Escuela Dominical)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#ffffff] dark:hover:text-[#a19b6d]"
                      >
                        VIDA JOVEN (Alcanzando un Joven Más)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#ffffff] dark:hover:text-[#a19b6d]"
                      >
                       LLEVANDO LUZ (Ayuda a los Débiles Visuales)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#ffffff] dark:hover:text-[#a19b6d]"
                      >
                        DE ORACIÓN Y GUERRA ESPIRITUAL
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li> */}

            <li className="relative py-6 lg:py-0 font-semibold text-[#a09a6a] hover:text-[#8d8758] cursor-pointer transition-all ease-in-out md:before:transition-[width] md:before:ease-in-out md:before:duration-700 md:before:absolute md:before:bg-[#8d8758] md:before:origin-center md:before:h-[2px] md:before:w-0 md:hover:before:w-[50%] md:before:bottom-0 md:before:left-[50%] md:after:transition-[width] md:after:ease-in-out md:after:duration-700 md:after:absolute md:after:bg-[#8d8758] md:after:origin-center md:after:h-[2px] md:after:w-0 md:hover:after:w-[50%] md:after:bottom-0 md:after:right-[50%]">
              <p>Servicios</p>
            </li>
            <li className="relative py-6 lg:py-0  font-semibold text-[#a09a6a] hover:text-[#8d8758] cursor-pointer transition-all ease-in-out md:before:transition-[width] md:before:ease-in-out md:before:duration-700 md:before:absolute md:before:bg-[#8d8758] md:before:origin-center md:before:h-[2px] md:before:w-0 md:hover:before:w-[50%] md:before:bottom-0 md:before:left-[50%] md:after:transition-[width] md:after:ease-in-out md:after:duration-700 md:after:absolute md:after:bg-[#8d8758] md:after:origin-center md:after:h-[2px] md:after:w-0 md:hover:after:w-[50%] md:after:bottom-0 md:after:right-[50%]">
              <p>Contacto</p>
            </li>
            <li className="relative py-6 lg:py-0  font-semibold text-[#a09a6a] hover:text-[#8d8758] cursor-pointer transition-all ease-in-out md:before:transition-[width] md:before:ease-in-out md:before:duration-700 md:before:absolute md:before:bg-[#8d8758] md:before:origin-center md:before:h-[2px] md:before:w-0 md:hover:before:w-[50%] md:before:bottom-0 md:before:left-[50%] md:after:transition-[width] md:after:ease-in-out md:after:duration-700 md:after:absolute md:after:bg-[#8d8758] md:after:origin-center md:after:h-[2px] md:after:w-0 md:hover:after:w-[50%] md:after:bottom-0 md:after:right-[50%]">
              <p>Nosotros</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

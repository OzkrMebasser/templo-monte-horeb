"use client";
import React, { useState } from "react";
import { PiChurchDuotone } from "react-icons/pi";
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
    <nav className="bg-white border-gray-200 fixed z-50 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2Flogo-MONTE-HOREB.gif?alt=media&token=3a3d75b7-0ffb-4a18-b9a9-fc35127401fb"
          className="h-[3.5rem] lg:h-[5rem] relative"
          alt="Logo"
        />
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-1 w-10 h-10 justify-center text-[#a09a6a] hover:text-[#fff] hover:bg-[#a09a6a] rounded-lg md:hidden "
          aria-controls="navbar-multi-level"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          {/* <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg> */}
          {!isMobileMenuOpen 
          ? (<PiChurchDuotone className="h-8 w-8  " />) 
          : (<CgCross className="h-8 w-8 rotate-[15deg]" />)}
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-multi-level"
        >
          <ul className="py-8 flex flex-col text-[#a09a6a] font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li className="relative font-semibold text-[#a09a6a] hover:text-[#8d8758] cursor-pointer transition-all ease-in-out md:before:transition-[width] md:before:ease-in-out md:before:duration-700 md:before:absolute md:before:bg-[#8d8758] md:before:origin-center md:before:h-[2px] md:before:w-0 md:hover:before:w-[50%] md:before:bottom-0 md:before:left-[50%] md:after:transition-[width] md:after:ease-in-out md:after:duration-700 md:after:absolute md:after:bg-[#8d8758] md:after:origin-center md:after:h-[2px] md:after:w-0 md:hover:after:w-[50%] md:after:bottom-0 md:after:right-[50%]">
              <p>Inicio</p>
            </li>

            {/* Ministerios Dropdown */}
            <li className="relative font-semibold text-[#a09a6a] hover:text-[#8d8758] cursor-pointer transition-all ease-in-out md:before:transition-[width] md:before:ease-in-out md:before:duration-700 md:before:absolute md:before:bg-[#8d8758] md:before:origin-center md:before:h-[2px] md:before:w-0 md:hover:before:w-[50%] md:before:bottom-0 md:before:left-[50%] md:after:transition-[width] md:after:ease-in-out md:after:duration-700 md:after:absolute md:after:bg-[#8d8758] md:after:origin-center md:after:h-[2px] md:after:w-0 md:hover:after:w-[50%] md:after:bottom-0 md:after:right-[50%]">
              <button
                id="dropdownNavbarLink"
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full  md:border-0  md:p-0 md:w-auto "
              >
                Ministerios
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div
                  id="dropdownNavbar"
                  className="z-50 absolute left-0 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        MINISTERIO DE HOMBRES ESFORZADOS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        MINISTERIO DE JÓVENES
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        MINISTERIO DE CASTILLO DEL REY (Juveniles)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        MINISTERIO FEMENILES
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        MINISTERIO DE EVANGELISMO
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        MINISTERIO MISIONERO
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        MINISTERIO DE CAPELLANIA
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        MINISTERIO DEBORAH (Madres en Clamor)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        MINISTERIO DEL DEMAAD (Música, Danza y Actuación)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        MINISTERIO DE EDUCACIÓN CRISTIANA (Escuela Dominical)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        MINISTERIO VIDA JOVEN (Alcanzando un Joven Más)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        MINISTERIO LLEVANDO LUZ (Ayuda a los Débiles Visuales)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        MINISTERIO DE ORACIÓN Y GUERRA ESPIRITUAL
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li className="relative font-semibold text-[#a09a6a] hover:text-[#8d8758] cursor-pointer transition-all ease-in-out md:before:transition-[width] md:before:ease-in-out md:before:duration-700 md:before:absolute md:before:bg-[#8d8758] md:before:origin-center md:before:h-[2px] md:before:w-0 md:hover:before:w-[50%] md:before:bottom-0 md:before:left-[50%] md:after:transition-[width] md:after:ease-in-out md:after:duration-700 md:after:absolute md:after:bg-[#8d8758] md:after:origin-center md:after:h-[2px] md:after:w-0 md:hover:after:w-[50%] md:after:bottom-0 md:after:right-[50%]">
              <p>Servicios</p>
            </li>
            <li className="relative font-semibold text-[#a09a6a] hover:text-[#8d8758] cursor-pointer transition-all ease-in-out md:before:transition-[width] md:before:ease-in-out md:before:duration-700 md:before:absolute md:before:bg-[#8d8758] md:before:origin-center md:before:h-[2px] md:before:w-0 md:hover:before:w-[50%] md:before:bottom-0 md:before:left-[50%] md:after:transition-[width] md:after:ease-in-out md:after:duration-700 md:after:absolute md:after:bg-[#8d8758] md:after:origin-center md:after:h-[2px] md:after:w-0 md:hover:after:w-[50%] md:after:bottom-0 md:after:right-[50%]">
              <p>Contacto</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

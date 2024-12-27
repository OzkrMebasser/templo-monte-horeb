import React from "react";
import { services } from "../api/data";

const ServicesSection = () => {
  return (
    <section id="services" className="pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-lg text-[#a09a6a] font-bold">
            Únase a nosotros en el culto y el compañerismo durante la semana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto  rounded-lg p-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg p-6 hover:shadow-md transition-shadow shadow-[0px_10px_17px_7px_rgba(0,_0,_0,_0.1)] border-[1px] border-[#a09a6a50] "
            >
              <h3 className="text-xl font-semibold mb-4 text-[#a09a6a] titles">
                {service.day}
              </h3>
              <ul className="space-y-3">
                {service.events.map((event, eventIndex) => (
                  <li
                    key={eventIndex}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-700">{event.time}</span>
                    <span className="font-medium text-[#a09a6a]">
                      {event.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

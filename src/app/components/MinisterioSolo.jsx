"use client";

import DescriptionImage from "../components/DescriptionImage";


const MinisterioSolo = ({ ministerio, carouselImages }) => {
  return (
    <>
      {/* Header section Ministerio*/}
      <section className="py-[30px] md:py-[80px] lg:pt-[60px] lg:pb-[0px] container mx-auto px-[20px] lg:px-6">
        <header>
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className="uppercase mt-[2rem] "
          >
            {ministerio}
          </h2>
        </header>
      </section>

      {/* Children Ministry */}

      <DescriptionImage
  
        bgSection="bg-black"
        titleTextColor="text-[#a09a6a]"
        descTextColor="text-white"
        subTitleTextColor="text-[#a09a6a]"
     
        images={carouselImages}
        // img="https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FrmccImages%201.jpeg?alt=media&token=4d257150-7491-41c9-b775-fa7ddc951b16"
        // subTitleTop="Luke 18:16, Let the little children come to me..."
        // subTitleTopTextColor="text-teal-200"
        desc={`Hombres Esforzados es un ministerio comprometido en fortalecer el crecimiento espiritual
             y el desarrollo de liderazgo de los hombres en la iglesia, proporcionando espacios de 
             aprendizaje y comunión. A través de estudios bíblicos, actividades de mentoría y encuentros 
             de oración, buscamos inspirar a cada hombre a vivir de acuerdo con los principios cristianos
             en todos los aspectos de su vida. Nuestro objetivo es empoderar a los hombres para que sean 
             líderes en sus hogares, comunidades y en el cuerpo de Cristo, promoviendo un ambiente de apoyo
              y crecimiento en el que se fomente la fe y el compañerismo genuino.`}
        subTitle="Reuniones: "
        subTitle2="Jueves 7:00 PM"
      />
    </>
  );
};

export default MinisterioSolo;

"use client";
import DescriptionImage from "../components/DescriptionImage";


const AboutPastors = () => {
  return (
    <>
      <DescriptionImage
        id="children-ministry"
        bgSection="bg-black"
        titleTextColor="text-[#a09a6a]"
        descTextColor="text-white"
        subTitleTextColor="text-[#a09a6a]"
        img="/assets/nuestros-pastores.webp"
        desc={`El Rv. Samuel Peña Cruz y su esposa, la Lic. Neisi Rodríguez González, 
          llegaron a la congregación el 18 de noviembre de 2016 junto a sus hijos, 
          María Ester y Juan Marcos. Desde su llegada, han liderado con dedicación el 
          crecimiento espiritual y numérico de la iglesia, enfrentando desafíos como 
          la falta de un templo propio. Bajo su liderazgo, la congregación ha experimentado
           grandes bendiciones, incluyendo sanidades, milagros y el fortalecimiento de la
            comunidad de fe. Su compromiso continúa impulsando la visión de construir un 
            templo para la gloria de Dios.`}
      />
    </>
  );
};

export default AboutPastors;

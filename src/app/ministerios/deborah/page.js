import MinisterioSolo from "../../components/MinisterioSolo";
import Title from "../../components/Title";
import { ministries } from "../../api/data";

const page = () => {
  // Encuentra el ministerio por nombre
  const selectedMinistry = ministries.find(
    (ministry) => ministry.name === "Deborah"
  );

  // Extrae las imágenes del carrusel y el nombre
  const carouselImages = selectedMinistry?.carouselImages || [];
  const title = selectedMinistry?.name || "Ministerio";
  const descAmplia = selectedMinistry?.descAmplia || "";

  return (
    <>
      <MinisterioSolo
        carouselImages={carouselImages}
        ministerio={<Title title={title} />}
        descAmplia={descAmplia}
        subTitle="Reuniones: "
        subTitle2="Martes 8:00 PM ( 1 vez al mes )"
      />
    </>
  );
};

export default page;

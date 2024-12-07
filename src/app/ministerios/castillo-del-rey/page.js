import MinisterioSolo from "../../components/MinisterioSolo";
import Title from "../../components/Title";
import { ministries } from "../../api/data";

const page = () => {
  // Encuentra el ministerio por nombre
  const selectedMinistry = ministries.find(
    (ministry) => ministry.name === "Castillo del rey"
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
        subTitle2="Domingo 7:00 PM"
      />
    </>
  );
};

export default page;

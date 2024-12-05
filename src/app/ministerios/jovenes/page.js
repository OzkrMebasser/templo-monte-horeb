import MinisterioSolo from "../../components/MinisterioSolo";
import Title from "../../components/Title";
import { ministries } from "../../api/data";

const page = () => {
  // Encuentra el ministerio por nombre
  const selectedMinistry = ministries.find(ministry => ministry.name === "Jóvenes");

  // Extrae las imágenes del carrusel y el nombre
  const carouselImages = selectedMinistry?.carouselImages || [];
  const title = selectedMinistry?.name || "Ministerio";

  return (
    <>
      <MinisterioSolo
        carouselImages={carouselImages}
        ministerio={<Title title={title} />}
      />
    </>
  );
};

export default page;

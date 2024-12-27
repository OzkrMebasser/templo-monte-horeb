import ServicesSection from '../components/ServicesSection';

import Title from "../components/Title";

const page = () => {
  return (
    <>
      <div className=" pt-[6rem] ">
        <Title title={"Horarios de Servicios"} />
        <ServicesSection />
      </div>


    </>
  );
};

export default page;

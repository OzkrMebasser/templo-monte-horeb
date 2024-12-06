"use client";

import DescriptionImage from "../components/DescriptionImage";


const MinisterioSolo = ({ ministerio, carouselImages, descAmplia, subTitle, subTitle2 }) => {
  return (
    <>
      {/* Header section Ministerio*/}
      <section className="pt-[40px] md:py-[80px] lg:pt-[60px] lg:pb-[0px] container mx-auto px-[20px] lg:px-6">
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
        desc={descAmplia}
        subTitle={subTitle}
        subTitle2={subTitle2}
      />
    </>
  );
};

export default MinisterioSolo;

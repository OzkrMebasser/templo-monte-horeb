"use client";
import DescriptionImage from "../components/DescriptionImage";

const childrenImages = [
  "https://images.pexels.com/photos/2014774/pexels-photo-2014774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2351722/pexels-photo-2351722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3101645/pexels-photo-3101645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const AboutPastors = () => {
  return (
    <>
      <DescriptionImage
        id="children-ministry"
        bgSection="bg-black"
        titleTextColor="text-[#a09a6a]"
        descTextColor="text-white"
        subTitleTextColor="text-[#a09a6a]"
        // title="Children Ministry"
        // images={childrenImages}
        img="https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2Fnuestros-pastores.png?alt=media&token=2c403d2a-6793-40b7-80c9-126f0b51da81"
        // subTitleTop="Luke 18:16, Let the little children come to me..."
        // subTitleTopTextColor="text-teal-200"
        desc={`    
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium error sit possimus laboriosam. Inventore veritatis minima necessitatibus alias nobis architecto dolore quo dignissimos! Incidunt nam soluta delectus dolorem possimus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium error sit possimus laboriosam. Inventore veritatis minima necessitatibus alias nobis architecto dolore quo dignissimos! Incidunt nam soluta delectus dolorem possimus.

          `}
        // subTitle="Reuniones: "
        // subTitle2="Jueves 7:00 PM"
      />
      {/* <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-2/3 bg-[black]  px-4 lg:px-20 py-8 lg:py-28">
          <p className="font-semibold text-lg text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nam
            fugit ut et perspiciatis dolor adipisci excepturi enim pariatur
            molestias, ipsa, non distinctio vero ipsam eius ipsum nisi,
            perferendis ratione! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Maiores optio cumque iusto, impedit, vel ad a,
            vero eaque quam quas recusandae iure aut eligendi vitae id eum unde
            itaque ipsa! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Delectus repudiandae magni id voluptatum non? Non at
            blanditiis provident aspernatur doloremque itaque, officia esse,
            optio excepturi porro dolor soluta nostrum in?
          </p>
        </div>
        <div className=" w-full lg:w-1/3 bg-[#000000] flex items-center justify-center">
          <img 
            className="max-h-[450px] px-8 lg:object-contain"
            src="https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2Fnuestros-pastores.png?alt=media&token=2c403d2a-6793-40b7-80c9-126f0b51da81" 
            alt="Nuestros Pastores" 
          />
        </div>
      </div> */}
    </>
  );
};

export default AboutPastors;

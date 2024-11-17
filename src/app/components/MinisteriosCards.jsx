"use client";
import React from "react";
import Title from "./Title";
import Link from "next/link";
import { ministries } from "../api/data";

//   {
//     name: "Hombres esforzados",
//     description:
//       "Un ministerio enfocado en el fortalecimiento espiritual y liderazgo de los hombres en la iglesia.",
//     img:
//       "https://images.pexels.com/photos/2351722/pexels-photo-2351722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     pageLink: "/hombres-esforzados"
  
//     },
//   {
//     name: "Jóvenes",
//     description:
//       "Motivamos a los jóvenes a seguir a Cristo y desarrollar su fe a través de actividades y estudios bíblicos.",
//       img:
//       "https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2Fluz.jpeg?alt=media&token=5d3c8e84-a52b-4414-8445-3ec96b901587",
//   },
//   {
//     name: "Castillo del rey ",
//     subTitle: "(juveniles)",
//     description:
//       "Enseñamos a los niños a conocer a Jesús mediante juegos y lecciones bíblicas interactivas.",
//       img:
//       "https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2Fluz.jpeg?alt=media&token=5d3c8e84-a52b-4414-8445-3ec96b901587",
//   },
//   {
//     name: "Femeniles",
//     description:
//       "Un espacio donde las mujeres pueden crecer en su fe y apoyarse mutuamente en su caminar con Dios.",
//       img:
//       "https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2Fluz.jpeg?alt=media&token=5d3c8e84-a52b-4414-8445-3ec96b901587",
//   },
//   {
//     name: "Evangelismo",
//     description:
//       "Llevamos el mensaje del evangelio a las personas en nuestra comunidad y más allá.",
//       img:
//       "https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2Fluz.jpeg?alt=media&token=5d3c8e84-a52b-4414-8445-3ec96b901587",
//   },
//   {
//     name: "Misionero",
//     description:
//       "Apoyamos y participamos en misiones locales e internacionales para expandir el reino de Dios.",
//       img:
//       "https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2Fluz.jpeg?alt=media&token=5d3c8e84-a52b-4414-8445-3ec96b901587",
//   },
//   {
//     name: "Capellanía",
//     description:
//       "Brindamos apoyo espiritual y emocional a quienes lo necesitan, tanto dentro como fuera de la iglesia.",
//       img:
//       "https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2Fluz.jpeg?alt=media&token=5d3c8e84-a52b-4414-8445-3ec96b901587",
//   },
//   {
//     name: "Deborah ",
//     subTitle: "(madres en clamor)",
//     description:
//       "Ministerio de intercesión dedicado a madres que oran por sus hijos y familias.",
//       img:
//       "https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2Fluz.jpeg?alt=media&token=5d3c8e84-a52b-4414-8445-3ec96b901587",
//   },
//   {
//     name: "Demaad ",
//     subTitle: "(música, danza y actuación)",
//     description:
//       "Expresamos nuestra adoración a Dios a través de las artes, incluyendo música, danza y teatro.",
//       img:
//       "https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2FDEEMAD.jpeg?alt=media&token=58adb3f5-31c3-469f-9594-38c041475424",
//   },
//   {
//     name: "Educación cristiana ",
//     subTitle: "(escuela dominical)",
//     description:
//       "Enseñamos a todas las edades los principios bíblicos para formar discípulos de Cristo.",
//       img:
//       "https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2Fluz.jpeg?alt=media&token=5d3c8e84-a52b-4414-8445-3ec96b901587",
//   },
//   {
//     name: "Vida joven ",
//     subTitle: "(alcanzando un joven más)",
//     description:
//       "Trabajamos para alcanzar a la juventud y guiarlos en su relación personal con Cristo.",
//       img:
//       "https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2Fluz.jpeg?alt=media&token=5d3c8e84-a52b-4414-8445-3ec96b901587",
//   },
//   {
//     name: "Llevando luz",
//     subTitle: "(ayuda a los débiles visuales)",
//     description:
//       "Ministerio dedicado a apoyar a las personas con discapacidad visual, proveyendo recursos y amor.",
//       img:
//       "https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2Fluz.jpeg?alt=media&token=5d3c8e84-a52b-4414-8445-3ec96b901587",
//   },
//   {
//     name: "Oración y guerra espiritual",
//     description:
//       "Nos dedicamos a la oración intercesora y al combate espiritual por la iglesia y la comunidad.",
//       img:
//       "https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/photos%2Fluz.jpeg?alt=media&token=5d3c8e84-a52b-4414-8445-3ec96b901587",
//   },
// ];

const MinistryCard = ({ name, description, subTitle, img, pageLink }) => (
  <div className="border-[1px] text-[#a09a6a] hover:text-black bg-white border-[#a09a6a50] hover:border-[#a09a6a] max-w-sm px-6 pt-6 pb-4 rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
    <div className="h-[4rem]">
      {" "}
      <h3 className=" text-xl font-bold   uppercase titles">{name}</h3>
      <p className=" text-[#a09a6a] tracking-tighter ">{subTitle}</p>
    </div>
    <div className="relative overflow-hidden rounded-xl h-[220px] ">
      <img
        className="object-contain w-full opacity-60 rounded-xl hover:scale-[1.2] hover:duration-700 ease-in-out hover:opacity-100  "
        src={img}
        alt={name}
      />
    </div>
    <div className="h-[100px] mt-6 ">
      <p className=" text-[black] align-middle text text-justify">
        {description}
      </p>
    </div>

    <button
      href="#"
      className="flex mt-2 mb-4  w-full overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#a09a6a] via-[#646043] to-[#807a55] text-white shadow hover:bg-[#a09a6a]/90 h-12 px-4 py-2  whitespace-pre md:flex group relative justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-[#535036] hover:ring-offset-2"
    >
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
      <div className="flex items-center">
        <Link href={pageLink}> 
        <span className="ml-1 titles text-[#ffffff] text-[1rem] uppercase font-semibold">
          Saber más
        </span>
        </Link>
      </div>
      <div className="ml-2 flex items-center gap-1 text-sm md:flex"></div>
    </button>
  </div>
);

const MinistriesList = () => (
  <>
    <div className=" pt-[6rem] ">
      <Title title={"Ministerios"} />

      <div className="min-h-screen bg-transparent flex justify-center items-center pb-10 px-4 lg:px-0">
        <div className=" md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-12 md:space-y-0">
          {ministries.map((ministry) => (
            <MinistryCard
              key={ministry.name}
              name={ministry.name}
              description={ministry.description}
              subTitle={ministry.subTitle}
              img={ministry.img}
              pageLink={`/ministerios/${ministry.pageLink}`} // Replace with actual pageLink when routing is implemented in the app. For now, we're using a dummy link. For real-world applications, you should replace the pageLink with the actual route of the ministry page. For example, '/ministro/capellania' for the Capellanía ministry. For the dummy link, we are using the ministry name as the
            />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default MinistriesList;

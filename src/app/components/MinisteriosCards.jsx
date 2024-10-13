"use client"
import React from "react";
import Title from "./Title";

const ministries = [
  {
    name: "Hombres esforzados",
    description: "Un ministerio enfocado en el fortalecimiento espiritual y liderazgo de los hombres en la iglesia.",
  },
  {
    name: "Jóvenes",
    description: "Motivamos a los jóvenes a seguir a Cristo y desarrollar su fe a través de actividades y estudios bíblicos.",
  },
  {
    name: "Castillo del rey (juveniles)",
    description: "Enseñamos a los niños a conocer a Jesús mediante juegos y lecciones bíblicas interactivas.",
  },
  {
    name: "Femeniles",
    description: "Un espacio donde las mujeres pueden crecer en su fe y apoyarse mutuamente en su caminar con Dios.",
  },
  {
    name: "Evangelismo",
    description: "Llevamos el mensaje del evangelio a las personas en nuestra comunidad y más allá.",
  },
  {
    name: "Misionero",
    description: "Apoyamos y participamos en misiones locales e internacionales para expandir el reino de Dios.",
  },
  {
    name: "Capellanía",
    description: "Brindamos apoyo espiritual y emocional a quienes lo necesitan, tanto dentro como fuera de la iglesia.",
  },
  {
    name: "Deborah (madres en clamor)",
    description: "Ministerio de intercesión dedicado a madres que oran por sus hijos y familias.",
  },
  {
    name: "Demaad (música, danza y actuación)",
    description: "Expresamos nuestra adoración a Dios a través de las artes, incluyendo música, danza y teatro.",
  },
  {
    name: "Educación cristiana (escuela dominical)",
    description: "Enseñamos a todas las edades los principios bíblicos para formar discípulos de Cristo.",
  },
  {
    name: "Vida joven (alcanzando un joven más)",
    description: "Trabajamos para alcanzar a la juventud y guiarlos en su relación personal con Cristo.",
  },
  {
    name: "Llevando luz (ayuda a los débiles visuales)",
    description: "Ministerio dedicado a apoyar a las personas con discapacidad visual, proveyendo recursos y amor.",
  },
  {
    name: "Oración y guerra espiritual",
    description: "Nos dedicamos a la oración intercesora y al combate espiritual por la iglesia y la comunidad.",
  },
];

const MinistryCard = ({ name, description }) => (
  <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-2xl transform hover:scale-105 transition duration-500">
    <h3 className="mb-3 text-xl font-bold text-indigo-600">{name}</h3>
    <div className="relative">
      <img
        className="w-full rounded-xl"
        src="https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt={name}
      />
    </div>
    <p className="mt-4 text-gray-800">{description}</p>
    <button className="mt-4 mb-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Conocer mas</button>
  </div>
);

const MinistriesList = () => (
    <>
    <div className=" pt-[8rem] bg-white">
    <Title title={"Ministerios"}/>
   
      
  <div className="min-h-screen bg-transparent flex justify-center items-center py-[3rem]">
   
    <div className=" md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">

      {ministries.map((ministry) => (
        <MinistryCard key={ministry.name} name={ministry.name} description={ministry.description} />
      ))}
    </div>
  </div>
  </div>
  </>
);

export default MinistriesList;

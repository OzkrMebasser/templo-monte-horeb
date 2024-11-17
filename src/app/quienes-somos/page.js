import AboutPastors from "../components/AboutPastors";
// import CarruselMinisterios from "../components/CarruselMinisterios/CarruselMinisterios";
import Title from "../components/Title";

const page = () => {
  return (
    <>
      <div className=" pt-[6rem] ">
        <Title title={"Nuestros Pastores"} />
      </div>
      <AboutPastors />
      <section className="h-auto px-8 lg:px-16 bg-[#ffffff9d]">
        <Title title={"BIOGRAFÍA DE NUESTRA IGLESIA"} />
        <div>
          <p className="mb-5 font-semibold text-lg text-justify text-black">
            En el año 2014 inicia en nuestra localidad la obra, comenzando como
            obra misionera, pues solo había 6 hermanos, estando al frente el
            hermano Carlos y su esposa, junto a sus dos niños, quienes
            pertenecían a la iglesia Nueva Vida en el poblado de Santa Lucía,
            Rafael Freire. Ellos trabajaron durante dos años, adquiriendo una
            pequeña casita de madera para la casa pastoral y sin un lugar donde
            congregarse. Sin embargo, esto no detuvo la obra, pues se añadían
            nuevas vidas.
          </p>
          <p className="mb-5 font-semibold text-lg text-justify text-black">
            En el año 2016 deciden mudarse a otro lugar para servir al Señor,
            quedando la congregación con 16 miembros en plena comunión, algunos
            nuevos convertidos y un grupo pequeño de niños. Ese mismo año, el 18
            de noviembre, llegan los pastores el Rv. Samuel Peña Cruz y su
            esposa, la Lic. Neisi Rodríguez González, junto a sus dos hijos,
            María Ester y Juan Marcos. Ellos continúan el trabajo en la
            localidad. Para ese tiempo nos congregábamos en una pequeña casita
            que nos prestó el hermano Alfredo, miembro de nuestra congregación.
          </p>
          <p className="mb-5 font-semibold text-lg text-justify text-black">
            En el mes de diciembre tuvimos que salir del lugar, ya que se volvió
            pequeño debido a la conversión de muchas personas. Entonces
            comenzamos a reunirnos en el patio de la casa pastoral, teniendo
            como único techo el cielo. Esto tampoco detuvo la obra, pues crecía
            en gran manera. Familias enteras venían a los pies de Cristo; muchos
            entregaban sus altares, grandes sanidades, milagros y liberaciones
            ocurrían. Se construyó un pequeño techo de zinc sin paredes para los
            servicios.
          </p>
          <p className="mb-5 font-semibold text-lg text-justify text-black">
            En el año 2018, el 28 de septiembre, se organiza oficialmente como
            iglesia con una membresía de 70 miembros en plena comunión, un grupo
            de nuevos convertidos y niños. Para ese tiempo pudimos tapiar todo
            el solar y colocar un techo en la parte trasera de la casa, ya que
            nos dieron la orden de construcción del patio techado y la casa
            pastoral. Sin embargo, hasta el día de hoy no se ha podido construir
            por falta de finanzas.
          </p>
          <p className="mb-5 font-semibold text-lg text-justify text-black">
            En marzo de 2020, unos hermanos de Canadá, los hermanos Soile y
            Tarmo, nos ayudaron a conseguir los fondos para adquirir una casa
            que se utiliza como casa pastoral. Todavía nos reunimos en el patio
            techado con la visión de construir nuestro templo, ya que contamos
            con la licencia de construcción, pero necesitamos las finanzas.
            Oramos para que el Señor supla y así poder construir nuestro
            anhelado templo.
          </p>
          <p className="mb-5 font-semibold text-lg text-justify text-black">
            En estos momentos estamos por celebrar los 10 años de fundada la
            obra y 6 años como iglesia organizada de las Asambleas de Dios en
            Cuba. Contamos con 120 hermanos y alrededor de 20 niños, por lo que
            podemos decir: <strong>"Ebenezer, hasta aquí nos ayudó el Señor." </strong>
          </p>
        </div>
      </section>

    </>
  );
};

export default page;

import React from "react";
import MinistriesSlidesImgs from "../components/MinitriesSlidesImgs/MinistriesSlidesImgs";

/**
 * This component displays a section with an image slider and a description.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.bgSection - The background color of the section, using Tailwind CSS classes.
 * @param {string} props.titleTextColor - The text color of the title, using Tailwind CSS classes.
 * @param {string} props.descTextColor - The text color of the description, using Tailwind CSS classes.
 * @param {string} props.subTitleTextColor - The text color of the subtitle, using Tailwind CSS classes.
 * @param {string} props.title - The title text.
 * @param {string} props.img - The URL of the fallback image to be displayed.
 * @param {string} props.desc - The description text.
 * @param {string} props.subTitle - The subtitle text.
 * @param {string} props.subTitle2 - The second subtitle text.
 * @param {string} props.servicesDays - The days of services as a string.
 * @param {string} props.dayAndTime - The day and time details as a string.
 * @returns {JSX.Element} - Returns a JSX element representing the section with the image slider and description.
 */
const DescriptionImage = ({
  id,
  bgSection,
  titleTextColor,
  descTextColor,
  subTitleTextColor,
  title,
  subTitleTop,
  subTitleTopTextColor,
  img,
  images = [],
  desc,
  subTitle,
  subTitle2,
  servicesDays,
  dayAndTime,
}) => {
  return (
    <section className={bgSection} id={id}>
      <div className=" lg:h-[32rem] px-8 lg:px-16 flex flex-col py-6 mx-auto lg:py-16 lg:flex-row lg:items-center">
        {/* Text on the left side */}
        <div className="h-full lg:w-1/2 pr-8 pt-6 order-1 lg:order-2  lg:text-left mb-6 lg:mb-0 ">
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className={`${titleTextColor} uppercase text-2xl mb-4 mt-8 font-bold leading-tight sm:text-4xl text-center lg:mt-2`}
          >
            {title}
          </h2>
          <div className="mt-4 bg-transparent py-8"  data-aos="fade-up" data-aos-delay="100">
            {/* Display top subtitle if provided */}
            {subTitleTop && (
              <p className={`${subTitleTopTextColor} mb-1 italic text-lg font-semibold`}>
                {subTitleTop}
              </p>
            )}
            <p className={`${descTextColor} mb-1 font-semibold text-lg text-justify`}>
              {desc}
            </p>
            {/* Display subtitle, subtitle2, and service days if provided */}
            {subTitle && (
              <p className={`${subTitleTextColor} mt-3 font-bold`}>
                {subTitle}
                {subTitle2 && (
                  <>
                    <br />
                    <span>{subTitle2}</span>
                  </>
                )}
                {servicesDays && (
                  <>
                    <br />
                    <span className="text-lg font-bold">
                      <strong>{servicesDays}</strong>
                    </span>
                  </>
                )}
              </p>
            )}
            <p className={subTitleTextColor}>{dayAndTime}</p>
          </div>
        </div>

        {/* Image slider on the right side ****AQUI CUANDO VIENE LA IMAGEN SI SE VE COMPLETA, PERO CUANDO VIENE SLIDER NO, POR QUE? */}
        <div className="flex items-center justify-center w-full h-full lg:w-1/2 order-1 lg:order-2">
          <MinistriesSlidesImgs images={images} img={img} title={title} />
        </div>
      </div>
    </section>
  );
};

export default DescriptionImage;

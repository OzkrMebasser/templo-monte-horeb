import React from "react";

const Title = ({ title }) => {
  return (
    <div className="p-[1.8rem]">
      {/* <h3 className="border-black uppercase text-2xl font-bold text-center text-[#a09a6a] [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)] "> */}
      <h3 className="titles uppercase text-[1.8rem] font-bold text-center text-[#a09a6a] ">
        {title}
      </h3>
    </div>
  );
};

export default Title;

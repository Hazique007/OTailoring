import React from "react";

import image10 from "../assets/images/log.png";
import { useNavigate } from "react-router-dom";

const Headerphoto = () => {
  const navigate = useNavigate();
  return (
    <div className="images flex-col justify-between items-center ">
      <img
        className="h-[24vh] w-full object-fit  "
        src={image10}
        alt=""
        srcSet=""
      />
      <button
        className="absolute bottom-3 right-3 text-[12px] text-white w-[112px] font-poppins font-medium  py-1 bg-gray-700 rounded-md shadow-md hover:bg-gray-600 transition-all duration-200 ease-in-out"
        onClick={() => navigate("/Home")}
      >
        Skip
      </button>
    </div>
  );
};

export default Headerphoto;

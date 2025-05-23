import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../../components/AuthHeader";
import ReactGA from "react-ga4";
import image from "../../assets/images/landing.png";

const AuthLanding = () => {
  const navigate = useNavigate();
  const userID = localStorage.getItem("userID");
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (userID) {
        navigate("/Home");
      } else {
        navigate("/otp");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-[100vh] w-[100vw]">
      {/* <div className="bg-black h-40 w-full">
        <p className="text-white text-center font-[1000] text-[30px] pt-10">
          Apna Darzi
        </p>
        <p className="text-white text-center font-[200] text-[18px]">
          welcome to the world of custom tailoring
        </p>
      </div>
      <AuthHeader /> */}
      <img
        className="w-[100vw] h-[100vh] object-fit"
        src={image}
        alt=""
        srcSet=""
      />
    </div>
  );
};

export default AuthLanding;

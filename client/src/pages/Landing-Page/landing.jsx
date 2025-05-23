import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import TopNav from "../../components/TopNav";
import Search from "../../components/Search";
import Hero from "../../components/Hero";
import Trending from "../../components/Trending";
import Works from "../../components/Works";
import WhatsApp from "../../components/whats";
import Fashion from "../../components/fashionStyling";
import { DesignStyling } from "../../components/styling";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { SearchContext } from "../../Context Api/searchContext";
const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Landing Page",
    });
  }, []);
  // const { track, setTrack } = useContext(SearchContext);
  const [track, setTrack] = useState(false);

  useEffect(() => {
    const userID = localStorage.getItem("userID");
    const token = localStorage.getItem("token");

    if (userID && token && !track) {
      const storeUserToken = async () => {
        try {
          const response = await axios.post(
            "https://apnadarzitailoring-5.onrender.com/api/v1/notification/storeToken",
            { userID, token }
          );
          console.log("Token stored:", response.data);
        } catch (error) {
          console.error("Error storing token:", error);
        }
      };

      storeUserToken();
      setTrack(true);
    }
  }, [track]);

  return (
    <div className="pb-20">
      <TopNav />
      <div className="w-full justify-center px-1 pt-3">
        <Search />
        <Hero />
        <DesignStyling />
        <div className="flex justify-center items-center">
          <WhatsApp />
        </div>
        <Trending />
        <Works />
        <Fashion />
      </div>
      <Navbar />
    </div>
  );
};

export default LandingPage;

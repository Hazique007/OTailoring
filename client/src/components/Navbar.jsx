import React, { useContext, useState, useEffect } from "react";
import { IoHome, IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { PiSquaresFourBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { SearchContext } from "../Context Api/searchContext";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const TopNavIcon = ({ label, image, onClick, text }) => {
  const { bg, setBg } = useContext(SearchContext);
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center justify-center  `}
    >
      {image}
      <h2
        className={`text-[13px] text-black font-poppins text-${label} font-[450]`}
      >
        {label}
      </h2>
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const { isSearch, setIsSearch, bg, setBg } = useContext(SearchContext);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSearch = () => {
    setIsSearch(!isSearch);
    setBg("Search");
    navigate("/search");
  };

  const handleProduct = () => {
    setBg("Allcategory");

    navigate("/Allcategory");
  };

  return (
    <div
      className={`Navigation h-[62px]  fixed bottom-0 flex items-center justify-between bg-[#FAF1F1] w-full px-6`}
    >
      <TopNavIcon
        onClick={() => {
          setBg("Home");
          navigate("/Home");
        }}
        text={bg == "Home" ? "pink-500" : "black"}
        label={"Home"}
        image={
          <IoHome
            className={`h-[25px] w-[25px] ${
              bg == "Home" ? "text-pink-500" : ""
            }`}
          />
        }
      />
      <TopNavIcon
        label={"Search"}
        image={
          <IoSearch
            className={`h-[25px] w-[25px] ${
              bg == "Search" ? "text-pink-500" : ""
            }`}
          />
        }
        onClick={handleSearch}
      />
      <TopNavIcon
        onClick={handleProduct}
        label={"Shop"}
        image={
          <PiSquaresFourBold
            className={`h-[25px] w-[25px] ${
              bg == "Allcategory" ? "text-pink-500" : ""
            }`}
          />
        }
      />
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={0} color="secondary">
          <TopNavIcon
            onClick={() => {
              setBg("Cart");
              navigate("/cart");
            }}
            label={"Cart"}
            image={
              <IoCartOutline
                className={`text-black h-[25px] w-[25px] ${
                  bg == "Cart" ? "text-pink-500" : "text-black"
                }`}
              />
            }
          />
        </StyledBadge>
      </IconButton>
      <TopNavIcon
        onClick={() => {
          setBg("Profile");
          navigate("/profile");
        }}
        label={"Profile"}
        image={
          profilePicture ? (
            <img
              src={profilePicture}
              alt="Profile"
              className={`h-[25px] w-[25px] rounded-full object-cover ${
                bg == "Profile" ? "text-pink-500" : ""
              }`}
            />
          ) : (
            <CgProfile
              className={`h-[25px] w-[25px] ${
                bg == "Profile" ? "text-pink-500" : ""
              }`}
            />
          )
        }
      />
    </div>
  );
};

export default Navbar;

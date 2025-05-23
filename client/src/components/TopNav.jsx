import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TopNav = () => {
  const navigate = useNavigate();
  const [isServicible, setIsServicible] = useState(false);
  const [pincode, setPincode] = useState("");
  const [tempPincode, setTempPincode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [city, setCity] = useState("Lucknow");

  const lucknowPincodes = [
    "226008",
    "226004",
    "226001",
    "227308",
    "226005",
    "226005",
    "226004",
    "227005",
    "226005",
    "226017",
    "226024",
    "226024",
    "227005",
    "226008",
    "226009",
    "226003",
    "227125",
    "227107",
    "226018",
    "227105",
    "226005",
    "227105",
    "227115",
    "226002",
    "227005",
    "226004",
    "227202",
    "227115",
    "227005",
    "227101",
    "226017",
    "226001",
    "226025",
    "227115",
    "227005",
    "227308",
    "227107",
    "226002",
    "227202",
    "227101",
    "227101",
    "227107",
    "226002",
    "227107",
    "226005",
    "227305",
    "226026",
    "226021",
    "227202",
    "227115",
    "227115",
    "227125",
    "226026",
    "226005",
    "227305",
    "226002",
    "227111",
    "227115",
    "227115",
    "226005",
    "227202",
    "227305",
    "227005",
    "226002",
    "226004",
    "226002",
    "226012",
    "226005",
    "226001",
    "226002",
    "226024",
    "226002",
    "226004",
    "227308",
    "226003",
    "227105",
    "226015",
    "226020",
    "226002",
    "226020",
    "226001",
    "227116",
    "227309",
    "227305",
    "227111",
    "226020",
    "227111",
    "226002",
    "226005",
    "227107",
    "227207",
    "227115",
    "226018",
    "227101",
    "227116",
    "226021",
    "226020",
    "226016",
    "227107",
    "227105",
    "226001",
    "226018",
    "226010",
    "226010",
    "227115",
    "227125",
    "226026",
    "226004",
    "226001",
    "226006",
    "226016",
    "226005",
    "226002",
    "226003",
    "227125",
    "226003",
    "226013",
    "226008",
    "227005",
    "226016",
    "227105",
    "226009",
    "226008",
    "226010",
    "227005",
    "227305",
    "227202",
    "227305",
    "227005",
    "227116",
    "226001",
    "227116",
    "227105",
    "227111",
    "227107",
    "227111",
    "227305",
    "226022",
    "227202",
    "227305",
    "227308",
    "227125",
    "227111",
    "227111",
    "227111",
    "227207",
    "227308",
    "227107",
    "227005",
    "226002",
    "227115",
    "227107",
    "227202",
    "227005",
    "227305",
    "226012",
    "226001",
    "226010",
    "226005",
    "226020",
    "226003",
    "226001",
    "226006",
    "226021",
    "226006",
    "226020",
    "227005",
    "227111",
    "227005",
    "226010",
    "227107",
    "227105",
    "227111",
    "227111",
    "226011",
    "226023",
    "226003",
    "226002",
    "226008",
    "227116",
    "227115",
    "226008",
    "226003",
    "227309",
    "227125",
    "226002",
    "226004",
    "227305",
    "227305",
    "226018",
    "227115",
    "227115",
    "226004",
    "226007",
    "227308",
    "226016",
    "227005",
    "226003",
    "226024",
    "226018",
    "227101",
    "226018",
    "226007",
    "226002",
    "227309",
    "226002",
    "226020",
    "227005",
    "226004",
    "227115",
    "226005",
    "226005",
    "227305",
    "226004",
    "226018",
    "226017",
    "226007",
    "227115",
    "226005",
    "227116",
    "227207",
    "226003",
    "226017",
    "226026",
    "226004",
    "226016",
    "227115",
    "227105",
    "227125",
    "227107",
    "226002",
    "227116",
    "226003",
    "226008",
    "227116",
    "227202",
    "227115",
    "227125",
    "227308",
    "226026",
    "226006",
    "227005",
    "227305",
    "226003",
    "227202",
    "226003",
    "226008",
    "226016",
    "227125",
    "226016",
    "226016",
    "226016",
    "226021",
    "226016",
    "226001",
    "226014",
    "226002",
    "226018",
    "226005",
    "227005",
    "227111",
    "227305",
    "226005",
    "226018",
    "227116",
    "226003",
    "226003",
    "227115",
    "227115",
    "226005",
    "226002",
    "226020",
    "226006",
    "227132",
    "226010",
    "227115",
    "227005",
    "226002",
    "227309",
    "226003",
    "226022",
    "226018",
    "226003",
    "226003",
  ];

  useEffect(() => {
    const savedPincode = localStorage.getItem("pincode");
    if (savedPincode) {
      setPincode(savedPincode);
      setIsServicible(lucknowPincodes.includes(savedPincode));
      setCity("Lucknow");
    }
  }, []);

  const handleBackClick = () => {
    if (window.location.pathname !== "/Home") {
      console.log(window.location.pathname);

      navigate(-1);
    } else {
    }
  };

  const handleSave = () => {
    if (lucknowPincodes.includes(tempPincode)) {
      setPincode(tempPincode);
      setIsServicible(true);
      setCity("Lucknow");
      localStorage.setItem("pincode", tempPincode);
      setIsModalOpen(false);
    } else {
      toast.error("This pincode is not serviceable");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setTempPincode("");
    if (!pincode || !lucknowPincodes.includes(pincode)) {
      setCity("Select City");
    }
  };

  const openModal = () => {
    setTempPincode(pincode || "");
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="h-[46px] bg-gradient-to-r from-[#9C3FE4] to-[#C65647] w-full flex items-center justify-between px-[8px]">
        <div className="flex items-center">
          <IoIosArrowBack
            onClick={handleBackClick}
            className="h-[16px] w-[16px] text-[#FFFFFF] font-[700] cursor-pointer"
          />
          <p className="text-white leading-[24px] text-[16px] font-[500] font-poppins ml-2">
            Apna Darzi
          </p>
        </div>
        <p
          onClick={openModal}
          className={`${
            isServicible ? "text-white font-[500]" : "text-white"
          } leading-[18px] text-[12px] font-poppins font-[400] cursor-pointer`}
        >
          {city}
        </p>
      </div>
      {isModalOpen && (
        <div className="z-40 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Enter Pincode</h2>
            <input
              type="text"
              value={tempPincode}
              onChange={(e) => setTempPincode(e.target.value)}
              className="p-2 border rounded w-full"
              placeholder="Enter Pincode"
            />
            <div className="flex space-x-4 mt-4">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 text-black rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default TopNav;

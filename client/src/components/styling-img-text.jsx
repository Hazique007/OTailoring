import { Link } from "react-router-dom";

const StylingImageText = ({ img, text, onClick, link }) => {
  const imageUrl = img
    ? `https://apnadarzitailoring-5.onrender.com/uploads/${img}`
    : null;

  return (
    <Link
      to={link}
      className="flex-col rounded-sm items-center justify-center text-center"
    >
      <div className="hover:bg-white">
        {imageUrl ? (
          <img
            onClick={onClick}
            className="w-[13.25vw] h-[13.25vw] object-cover rounded-sm"
            src={imageUrl}
            alt=""
          />
        ) : (
          <div
            onClick={onClick}
            className="w-[13.25vw] h-[13.25vw] bg-gray-800 rounded-sm"
          />
        )}
      </div>
      <p className="text-[12.5px] mt-3 font-[400] leading-[15px] font-poppins">
        {text}
      </p>
    </Link>
  );
};

export default StylingImageText;

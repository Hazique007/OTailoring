import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactGA from "react-ga4";

const Fashion = () => {
  const [fashionImages, setFashionImages] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Fashion and Styling Page",
    });

    fetchFashionImages();
  }, []);

  const fetchFashionImages = async () => {
    try {
      const { data } = await axios.get(
        "https://apnadarzitailoring-5.onrender.com/api/v1/landing/getFashionPageImages"
      );

      if (data.status !== "success") {
        navigate("/error");
        return;
      }

      const images = data.data;
      const placeholders = Array.from(
        { length: 8 - images.length },
        (_, i) => ({
          fashionImage: null,
          category: "Placeholder",
          gender: "Unknown",
          _id: `placeholder-${i}`,
        })
      );

      setFashionImages([...images, ...placeholders]);
    } catch (err) {
      console.error("Error fetching fashion images:", err);
      setError(true);
    }
  };

  const handleImageClick = async (gender, category) => {
    try {
      await axios.post(
        "https://apnadarzitailoring-5.onrender.com/api/v1/stats/trackClick",
        {
          gender,
          category,
        }
      );

      ReactGA.event(category, {
        event_category: category,
        event_label: `Clicked ${category}`,
      });

      navigate(`/FashionProduct/${gender}/${category}`);
    } catch (err) {
      console.error("Error tracking click:", err);
    }
  };

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        Error loading fashion images. Please try again later.
      </div>
    );
  }

  return (
    <div className="px-4 mt-10 rounded-lg">
      <h1 className="font-poppins ml-1 font-bold text-[12px] leading-[18px]">
        Fashion and Style Highlights
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {fashionImages.length > 0
          ? fashionImages.map((image, index) => (
              <div
                key={image._id || `image-${index}`}
                className="cursor-pointer w-full"
                onClick={() =>
                  handleImageClick(image.gender || "Unknown", image.category)
                }
              >
                {image.fashionImage ? (
                  <img
                    className="aspect-square w-full object-cover rounded-lg"
                    src={`https://apnadarzitailoring-5.onrender.com/uploads/${image.fashionImage}`}
                    alt={image.category || "Fashion Item"}
                  />
                ) : (
                  <div className="aspect-square w-full rounded-lg shimmer" />
                )}
              </div>
            ))
          : Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square w-full rounded-lg shimmer"
              />
            ))}
      </div>
    </div>
  );
};

export default Fashion;

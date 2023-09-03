import React from "react";
import "./style.css";
import amy from "../../assets/image-amy.webp";

const Banner = () => {
  return (
    <div className="amy">
      <div className="amy_image">
        <img src={amy} alt="" />
      </div>
      <div className="amy_description">
        <h2>
          I'm Amy, and I'd love to <br /> work on your next project
        </h2>
        <p>
          I love working with others to create beautiful design solutions. I've
          designed everything from brand illustrations to complete mobile apps.
          I'm also handy with a camera!
        </p>
        <button>Free Consultation</button>
      </div>
    </div>
  );
};

export default Banner;

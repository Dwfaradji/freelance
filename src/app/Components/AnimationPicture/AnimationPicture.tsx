import React from "react";
import image1 from "../../../public/images/a_propos.jpg";
import image2 from "../../../public/images/bg-1.jpg";
import image3 from "../../../public/images/bg-2.jpg";
import "./AnimationPicture.scss";

interface AnimationPictureProps {
  itemsPicture: any[];
}

const AnimationPicture = ({ itemsPicture }: AnimationPictureProps) => {
  return (
    <div className="about-images">
      {itemsPicture.map((item, i) => (
        <div key={i} className="image-container">
          <img src={item.picture} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default AnimationPicture;

import React from "react";
import "./AnimationPicture.scss";

interface AnimationPictureProps {
  itemsPicture: any[];
}

const AnimationPicture = ({ itemsPicture }: AnimationPictureProps) => {
  return (
    <>
      <h2>TITRE H2</h2>
      <div className="about-images">
        {itemsPicture.map((item, i) => (
          <div key={i} className="image-container">
            <img src={item.picture} alt={item.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimationPicture;

import React from "react";
import "./AnimationPicture.scss";
import Image from "next/image";

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
            <Image
              src={item.picture}
              alt={item.title}
              width="1024"
              height="100"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimationPicture;

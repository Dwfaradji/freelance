import React from "react";
import "./AnimationPicture.scss";
import Image from "next/image";

interface AnimationPictureProps {
  itemsPicture: any[];
}

const AnimationPicture = ({ itemsPicture }: AnimationPictureProps) => {
  return (
    <>
      <h2 className="text-h2">Processus de développement web freelance</h2>
      <div className="about-images">
        {itemsPicture.map((item, i) => (
          <div key={i} >
            <Image
              className="image-container"
              src={item.picture}
              alt={item.title}
              width="1024"
              height="100"
            />
            <h3 className="text-h3">{item.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimationPicture;

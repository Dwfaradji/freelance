import React from "react";
import "./AnimationIcon.scss";

interface AnimationIconProps {
  itemsIcon: any[];
}

const AnimationIcon = ({ itemsIcon }: AnimationIconProps) => {
  return (
    <section className="container-fluid animationIcon ">
      <h2>Une approche avancée pour des applications web performantes</h2>
      <div className=" containerIcon">
        {itemsIcon &&
          itemsIcon.map((item, i) => (
            <div key={i} className="itemsIcon">
              <i className={item.icon} />
              <h3>{item.title}</h3>
            </div>
          ))}
      </div>
    </section>
  );
};

export default AnimationIcon;

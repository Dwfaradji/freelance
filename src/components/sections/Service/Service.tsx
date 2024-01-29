import React from "react";
import "./Service.scss";

interface Test {
  id: number;
  title: string;
}

interface Lists {
  id: number;
  title: string;
  description: string;
  items: Test[];
}

interface ServiceProps {
  dataServices: Lists[];
}

const Service = ({ dataServices }: ServiceProps) => {
  return (
    <section className="container services ">
      <h2 className="text-h2">Services proposés</h2>
      <div className="md:grid grid-rows-3 grid-flow-col gap-4 ">
        {dataServices.map((service, i) => (
          <article key={i} className="services__column grid grid-rows-[80px_minmax(50px,_1fr)_100px] grid-flow-col ">
            <h3 className="text-h3 text-2xl">{service.title}</h3>
            <p className="text-xl">{service.description}</p>
            <ul>
              {service.items.map((item, i) => (
                <li key={i}>
                  <i className="fa-solid fa-caret-up fa-rotate-90"></i>
                  {item.title}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Service;

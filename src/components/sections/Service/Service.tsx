import React from "react";
import "./Service.scss";
import { Button } from "@/components/ui/button";

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
    <section className="container services">
      <h2 className="text-h2">Services proposés</h2>
      <div className=" md:grid grid-rows-3 grid-flow-col gap-4">
        {dataServices.map((service, i) => (
          <article key={i} className="services__column flex-col flex shadow hover:shadow-lg justify-between">
            <h3 className="text-h3 text-2xl animate-bounce mr-3">{service.title}</h3>
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

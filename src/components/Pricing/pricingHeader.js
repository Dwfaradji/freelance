import React from "react"
import {Fade} from "react-awesome-reveal";


const PricingHeader = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 font-poppins text-white flex flex-col items-center">
      <Fade bottom>
        <h1 className="text-6xl font-bold m-5 xxs:text-xl sm:text-4xl lg:text-6xl">
          Une tarification simple et transparente
        </h1>
        <h2 className="text-base opacity-50 text-center xxs:text-sm sm:text-lg">
          Obtenez le plan Devevoke qui correspond à vos besoins avec une introduction spéciale de
          prix.
        </h2>
      </Fade>
      <Fade bottom cascade>
        <div className="grid grid-cols-2 gap-4 mt-10 xxs:grid-cols-1 sm:grid-cols-2">
          <div className="bg-lightblack p-10 rounded-xl">
            <h2 className="text-2xl text-gradient bg-gradient-to-r from-pink to-purple ">
              Maintenance
            </h2>
            <h1 className="text-4xl mt-2 font-bold">49€/Mo</h1>
            <h3 className="text-sm mt-2 opacity-50">
              Better insights for growing businesses that want more customers.
            </h3>
            <ul className="mt-5">
              <li className="text-sm opacity-70 py-2">
                {" "}
                - malesuada fames ac turpis egestas
              </li>
              <li className="text-sm opacity-70 py-2">
                {" "}
                - malesuada fames ac turpis egestas
              </li>
              <li className="text-sm opacity-70 py-2">
                {" "}
                - malesuada fames ac turpis egestas
              </li>
              <li className="text-sm opacity-70 py-2">
                {" "}
                - malesuada fames ac turpis egestas
              </li>
              <li className="text-sm opacity-70 py-2">
                {" "}
                - malesuada fames ac turpis egestas
              </li>
            </ul>
            <button className="mt-5 px-5 bg-gradient-to-r from-pink to-purple p-2">
              Start Free Trial
            </button>
          </div>
          <div className="bg-lightblack p-10 rounded-xl">
            <h2 className="text-2xl text-gradient bg-gradient-to-r from-pink to-purple ">
              Hébergement
            </h2>
            <h1 className="text-4xl mt-2 font-bold">25€/An</h1>
            <h3 className="text-sm mt-2 opacity-50">
              Better insights for growing businesses that want more customers.
            </h3>
            <ul className="mt-5">
              <li className="text-sm opacity-70 py-2">
                {" "}
                - malesuada fames ac turpis egestas
              </li>
              <li className="text-sm opacity-70 py-2">
                {" "}
                - malesuada fames ac turpis egestas
              </li>
              <li className="text-sm opacity-70 py-2">
                {" "}
                - malesuada fames ac turpis egestas
              </li>
              <li className="text-sm opacity-70 py-2">
                {" "}
                - malesuada fames ac turpis egestas
              </li>
              <li className="text-sm opacity-70 py-2">
                {" "}
                - malesuada fames ac turpis egestas
              </li>
            </ul>
            <button className="mt-5 px-5 bg-gradient-to-r from-pink to-purple p-2">
              Start Free Trial
            </button>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default PricingHeader

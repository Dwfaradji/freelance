"use client"
import React, {useState} from "react"
import Button from "@/components/ui/Atoms/button"
import {Fade} from "react-awesome-reveal";
import Modal from "@/components/ui/Modal/modal";
import {prices} from "@/data/data";


const PricingMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentModal, setContentModal] = useState("");

  const handleOpenModal = (e:any) => {
    setIsOpen(true);
    setContentModal(e.target.id);
  };

  return (
    <div className="max-w-7xl mx-auto px-6  lg:block">
      <Fade >
        <div className="flex-col gap-3 w-full bg-gradient-to-r from-pink to-purple flex items-center justify-center  rounded-xl">
          {prices.map((tarif, i) => (
              <article
                  key={i.toString()}
                  className="flex flex-col sm:flex-row bg-white h-auto rounded-xl m-3 "
              >
              <span className="relative flex h-3 w-3 m-4">
                <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-pink to-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-pink to-purple"></span>
              </span>
                <div className="p-8 w-full  sm:w-3/5">
                  <h1 className="text-3xl font-bold">
                    {tarif.title} <br/> {tarif.subtitle}
                  </h1>
                  <br/>
                  <p>{tarif.description}</p>
                  <div className=" hidden mt-5">
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <h3>Feature One</h3>
                      <h3>Feature Two</h3>
                      <h3>Feature Three</h3>
                      <h3>Feature Four</h3>
                    </div>
                  </div>
                </div>
                <div className="w-full  sm:w-2/5 flex flex-col items-center justify-center  p-8 bg-pink rounded-r-lg">
                  <h2 className="text-xl text-white text-bold">
                    À partir de
                  </h2>
                  <h1 className="text-7xl text-white font-bold mt-2">{tarif.price}</h1>
                  <div className="mt-5">
                    <Button
                        id={tarif.id}
                        colorClass="bg-white"
                        title=" En savoir plus"
                        onClick={handleOpenModal}
                    ></Button>

                  </div>
                </div>
              </article>
          ))}
          {isOpen && (
              <Modal
                  showModal={isOpen}
                  setIsOpen={setIsOpen}
                  contentModal={contentModal}
                  prices={prices}

              />
          )}
        </div>
      </Fade>
    </div>
  )
}

export default PricingMain

'use client';
import React, { useState } from 'react';
import Button from '@/components/ui/Atoms/button';
import { Fade } from 'react-awesome-reveal';
import Modal from '@/components/ui/Modal/modal';
import { prices } from '@/data/data';
import Link from "next/link";

const PricingMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentModal, setContentModal] = useState('');

  const handleOpenModal = (e: any) => {
    setIsOpen(true);
    setContentModal(e.target.id);
  };

  return (
    <section className="mx-auto max-w-7xl lg:block">
      <Fade>
        <div
          className="flex w-full flex-col items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-pink  to-purple">
          {prices.map((tarif, i) => (
            <article
              key={i.toString()}
              className="m-3 flex h-auto flex-col rounded-xl bg-white sm:flex-row "
            >
              <span className="relative m-4 flex size-3">
                <span
                  className="absolute inline-flex size-full animate-ping rounded-full bg-gradient-to-r from-pink to-purple opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-gradient-to-r from-pink to-purple"></span>
              </span>
              <div className="w-full p-8  sm:w-3/5">
                <h2 className="text-3xl font-bold">
                  {tarif.title} <br /> {tarif.subtitle}
                </h2>
                <br />
                <p>{tarif.description}</p>
                <div className=" mt-5 hidden">
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <h3>Feature One</h3>
                    <h3>Feature Two</h3>
                    <h3>Feature Three</h3>
                    <h3>Feature Four</h3>
                  </div>
                </div>
              </div>
              <div className="flex  w-full flex-col items-center justify-center rounded-r-lg  bg-pink p-8 sm:w-2/5">
                <h2 className="text-xl text-white">À partir de</h2>
                <h3 className="mt-2 text-4xl font-bold text-white lg:text-7xl">
                  {tarif.price}
                </h3>
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
        </div>
      </Fade>

      {
        isOpen && (
          <Modal
            showModal={isOpen}
            setIsOpen={setIsOpen}
            contentModal={contentModal}
            prices={prices}
          />
        )
      }
    </section>
  )
    ;
};

export default PricingMain;

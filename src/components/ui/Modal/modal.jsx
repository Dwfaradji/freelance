"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";


const Modal = ({
                   showModal,
                   setIsOpen,
                   contentModal,
                   prices
               }) => {
    const [open, setOpen] = useState("hidden")
    useEffect(() => {
        prices.map((data) => {
            console.log(data.id === "0")
            if (contentModal === data.id) {
                setModal(data);
                return data;
            }
        });

        if (showModal) {
            setOpen("")
            document.body.classList.add('modal-open');
        } else {
            setIsOpen(false)
        }
        return () => {
            // Supprime la classe lorsque la modal se ferme
            document.body.classList.remove('modal-open');
        };
    }, [setIsOpen, showModal]);

    const [modal, setModal] = useState();


    useEffect(() => {
        // Ajoute la classe lorsque la modal s'ouvre
        document.body.classList.add('modal-open');


    }, []);

    return (

        <div id="popup-modal" tabIndex="-1" aria-hidden="true"
             className={`${open} overflow-y-hidden overflow-x-hidden fixed flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <div className="relative p-4  max-w-2xl mx-auto max-h-full text-center">

                <div className="relative z-40 bg-white rounded-lg shadow dark:bg-black">

                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {modal && modal.subtitle}
                        </h3>

                        <button type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="static-modal"
                                onClick={() => setIsOpen(false)}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-4 md:p-5 space-y-4">
                        <ul className="text-left text-base leading-relaxed text-gray-500 dark:text-white">
                            {modal &&
                                modal.details.map((detail, i) => (
                                    <li key={i.toString()}>
                                        <i className="fa-solid fa-check"></i> {detail}
                                    </li>
                                ))}
                        </ul>
                        <h3 className={"dark:text-white"}>À partir de: {modal && modal.price}</h3>

                    </div>
                    <div
                        className="flex w-full justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-black">
                        <Link href={`/devis/${modal && modal.id}`}>
                        <span className="relative inline-flex">
                                       <button
                                           onClick={() => setIsOpen(true)}
                                           data-modal-hide="static-modal" type="button"
                                           className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-black dark:hover:text-black dark:hover:bg-white">
                                           Demander un devis
                                        </button>
                                    <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                                        <span
                                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                    </span>
                                </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

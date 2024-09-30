'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { slugify } from '@/utils/slugify';
import { Fade } from "react-awesome-reveal";

interface ModalProps {
  showModal: boolean;
  setIsOpen: (isOpen: boolean) => void;
  contentModal: string;
  prices: Array<{
    id: string;
    subtitle: string;
    details: string[];
    price: string;
    title: string;
  }>;
}

const Modal: React.FC<ModalProps> = ({ showModal, setIsOpen, contentModal, prices }) => {
  const [open, setOpen] = useState<string>('hidden');
  const [modal, setModal] = useState<ModalProps['prices'][number] | null>(null);

  useEffect(() => {
    if (showModal) {
      setOpen('');
      document.body.classList.add('modal-open');
    } else {
      setOpen('hidden');
      document.body.classList.remove('modal-open');
    }

    const selectedModal = prices.find(data => data.id === contentModal);
    setModal(selectedModal || null);

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showModal, contentModal, prices]);

  return (
    <div
      style={{ zIndex: 1000, position: 'fixed' }}
      id="modal"
      tabIndex={-1}
      aria-hidden={!showModal}
      aria-modal="true"
      role="dialog"
      className={`${open} inset-0 flex h-screen w-screen items-center justify-center backdrop-blur-lg`}
    >
      <div className="relative mx-auto max-h-full max-w-2xl p-4 text-center">
        <div className="relative rounded-lg bg-white shadow dark:bg-black">
          <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
            <h3 className="text-center font-semibold text-gray-900 xxs:text-xl md:text-2xl dark:text-white">
              <span className="bg-gradient-to-r from-pink to-purple text-gradient">
                {modal && modal.subtitle}
              </span>
            </h3>
            <button
              type="button"
              className="ms-auto inline-flex size-8 items-center justify-center rounded-lg text-sm hover:bg-gradient-to-t hover:from-pink hover:to-purple hover:text-white  "
              data-modal-hide="static-modal"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="size-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="space-y-4 p-4 md:p-5">
            <ul className="text-left leading-relaxed text-gray-500 xxs:text-xs md:text-xl dark:text-white">
              {modal &&
                modal.details.map((detail, i) => (
                  <li key={i.toString()}>
                    <ArrowRightIcon className="text-blue" /> {detail}
                  </li>
                ))}
            </ul>
            <h3 className="dark:text-white text-gray-500">
              À partir de: {" "}
              <span className="animate-pulse bg-gradient-to-l from-pink to-purple text-gradient">
               {modal && modal.price}
              </span>
            </h3>
          </div>

          <div className="flex w-full items-center justify-center rounded-b border-t border-gray-200 p-4 md:p-5 dark:border-black">
            <Link
              href={modal ? `/devis/${slugify(modal.title)}` : '#'}
              onClick={() => setIsOpen(false)} // Fermer la modal lors de la navigation
            >
              <div className="relative inline-flex ">
                <button
                  data-modal-hide="static-modal"
                  type="button"
                  className=" hover:text-blue-700 ms-3 animate-bounce rounded-lg border border-gray-200 bg-gradient-to-t from-pink to-purple  px-5 py-2.5 text-sm font-medium text-white hover:bg-white hover:bg-gradient-to-t hover:from-pink hover:text-black focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-black dark:bg-gray-800 dark:text-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-700"
                >
                  Demander un devis
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

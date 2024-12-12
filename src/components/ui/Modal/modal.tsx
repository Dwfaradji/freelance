'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { slugify } from '@/utils/slugify';

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

const Modal: React.FC<ModalProps> = ({
  showModal,
  setIsOpen,
  contentModal,
  prices,
}) => {
  const [modal, setModal] = useState<ModalProps['prices'][number] | null>(null);
  const router = useRouter();

  useEffect(() => {
    const selectedModal = prices.find((data) => data.id === contentModal);
    setModal(selectedModal || null);
  }, [contentModal, prices]);

  const handleCloseModal = () => setIsOpen(false);

  const handleRedirect = () => {
    if (modal) {
      router.push(`/devis/${slugify(modal.title)}`);
    }
  };

  return (
    <div
      style={{ zIndex: 1000, position: 'fixed' }}
      id="modal"
      tabIndex={-1}
      aria-hidden={!showModal}
      aria-modal="true"
      role="dialog"
      className={`inset-0 flex h-screen w-screen items-center justify-center backdrop-blur-lg ${showModal ? '' : 'hidden'}`}
    >
      <div className="relative mx-auto max-h-full max-w-2xl p-4 text-center">
        <div className="relative rounded-lg bg-white shadow dark:bg-black">
          <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
            <h3 className="text-center font-semibold text-gray-900 xxs:text-xl md:text-2xl dark:text-white">
              <span className="bg-gradient-to-r from-pink to-purple text-gradient">
                {modal?.subtitle}
              </span>
            </h3>
            <button
              type="button"
              className="ms-auto inline-flex size-8 items-center justify-center rounded-lg text-sm hover:bg-gradient-to-t hover:from-pink hover:to-purple hover:text-white"
              onClick={handleCloseModal}
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
              {modal?.details.map((detail, i) => (
                <li key={i}>
                  <ArrowRightIcon className="text-blue" /> {detail}
                </li>
              ))}
            </ul>
            <h3 className="flex justify-center text-gray-500 dark:text-white">
              À partir de:{' '}
              <span className="ml-2 block animate-bounce bg-gradient-to-l from-pink to-purple text-gradient">
                {modal?.price}
              </span>
            </h3>
          </div>

          <div className="flex w-full items-center justify-center rounded-b border-t border-gray-200 p-4 md:p-5 dark:border-black">
            <button
              type="button"
              className="ms-3 animate-pulse rounded-lg border border-gray-200 bg-gradient-to-t from-pink to-purple px-5 py-2.5 text-sm font-medium text-white hover:bg-white hover:bg-gradient-to-t hover:from-pink hover:text-black focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-black dark:bg-gray-800 dark:text-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-700"
              onClick={handleRedirect}
            >
              Demander un devis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

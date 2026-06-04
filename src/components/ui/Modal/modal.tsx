'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { slugify } from '@/utils/slugify';
import { motion, AnimatePresence } from 'motion/react';

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

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (showModal) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal, setIsOpen]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const handleCloseModal = () => setIsOpen(false);

  const handleRedirect = () => {
    if (modal) {
      router.push(`/devis/${slugify(modal.title)}`);
    }
  };

  return (
    <AnimatePresence>
      {showModal && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="absolute inset-0 bg-[var(--color-bg)]/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl glass border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col"
          >
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between border-b border-white/10 p-6 md:px-8 bg-black/20 backdrop-blur-md z-10">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  <span className="text-gradient drop-shadow-sm">
                    {modal?.title}
                  </span>
                </h3>
                {modal?.subtitle && (
                  <p className="text-sm text-primary-400 font-medium mt-1 uppercase tracking-wider">{modal.subtitle}</p>
                )}
              </div>
              <button
                type="button"
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-muted hover:text-white transition-colors border border-white/5"
                onClick={handleCloseModal}
                aria-label="Fermer"
              >
                <svg
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-grow custom-scrollbar">
              <ul className="space-y-4">
                {modal?.details.map((detail, i) => (
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    key={i} 
                    className="flex items-start gap-3 text-base md:text-lg text-gray-300 leading-relaxed"
                  >
                    <svg className="size-6 shrink-0 text-primary-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/10 bg-black/40 p-6 md:px-8 backdrop-blur-md z-10">
              <div>
                <span className="block text-sm font-medium text-muted uppercase tracking-wider mb-1">
                  À partir de
                </span>
                <span className="text-4xl font-bold text-white drop-shadow-sm">
                  {modal?.price}
                </span>
              </div>
              <button
                type="button"
                className="btn-primary w-full sm:w-auto px-8 py-4 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                onClick={handleRedirect}
              >
                Demander un devis
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

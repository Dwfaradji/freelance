'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

// Composant pour l'apparition cinématique mot par mot avec flou
const BlurRevealText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, delay: delay + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default function Header() {
  const containerRef = useRef<HTMLDivElement>(null);

  // -- PARALLAX LOGIC --
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Configuration Spring pour un mouvement fluide et organique
  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Background spotlight
  const bgX = useTransform(smoothX, [-0.5, 0.5], ['-30%', '30%']);
  const bgY = useTransform(smoothY, [-0.5, 0.5], ['-30%', '30%']);

  // Floating Widgets Parallax (Inverse movement for 3D depth)
  const widget1X = useTransform(smoothX, [-0.5, 0.5], [40, -40]);
  const widget1Y = useTransform(smoothY, [-0.5, 0.5], [40, -40]);
  const widget1RotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const widget1RotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  const widget2X = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const widget2Y = useTransform(smoothY, [-0.5, 0.5], [60, -60]);
  const widget2RotateX = useTransform(smoothY, [-0.5, 0.5], [15, -15]);
  const widget2RotateY = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);

  const widget3X = useTransform(smoothX, [-0.5, 0.5], [60, -60]);
  const widget3Y = useTransform(smoothY, [-0.5, 0.5], [20, -20]);
  const widget3RotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const widget3RotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  // -- MAGNETIC BUTTON LOGIC --
  const btnRef = useRef<HTMLAnchorElement>(null);
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const btnSmoothX = useSpring(btnX, { damping: 20, stiffness: 300 });
  const btnSmoothY = useSpring(btnY, { damping: 20, stiffness: 300 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();

    // Normaliser entre -0.5 et 0.5
    mouseX.set((clientX - left) / width - 0.5);
    mouseY.set((clientY - top) / height - 0.5);

    // Effet magnétique du bouton primaire
    if (btnRef.current) {
      const btnRect = btnRef.current.getBoundingClientRect();
      const btnCenterX = btnRect.left + btnRect.width / 2;
      const btnCenterY = btnRect.top + btnRect.height / 2;

      const distanceX = clientX - btnCenterX;
      const distanceY = clientY - btnCenterY;

      // Rayon d'attraction magnétique de 100px
      if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
        btnX.set(distanceX * 0.2);
        btnY.set(distanceY * 0.2);
      } else {
        btnX.set(0);
        btnY.set(0);
      }
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    btnX.set(0);
    btnY.set(0);
  };

  return (
    <header
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] w-full flex flex-col items-center justify-start lg:justify-center overflow-hidden bg-[#030712] pt-28 pb-32 lg:pt-0 lg:pb-32 perspective-[1000px]"
    >
      {/* 1. INTERACTIVE BACKGROUND */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-primary-600/15 blur-[120px] pointer-events-none z-0"
      />
      <div className="absolute inset-0 bg-grid opacity-[0.15] pointer-events-none z-0 mask-image:linear-gradient(to_bottom,transparent,black,transparent)" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-20 my-auto">

        {/* LEFT COLUMN: TYPOGRAPHY & CTAs */}
        <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10">

          {/* Badge Vercel-style */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary-500" />
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-gray-300">
              ✨ Votre Partenaire Technologique Santé
            </span>
          </motion.div>

          {/* Cinematic Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold tracking-tighter leading-[1.1] text-white mb-6">
            <BlurRevealText text="Innovez dans le" delay={0.1} /> <br className="hidden sm:block" />
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 animate-gradient-x inline-block mt-1 sm:mt-2"
            >
              parcours de soin
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="max-w-xl text-lg sm:text-xl text-gray-400 leading-relaxed font-light mb-12"
          >
            DevEvoke conçoit des applications sur-mesure sécurisées (HDS) pour les professionnels de santé, cliniques et EHPAD.
            Simplifiez le suivi de vos patients avec des interfaces <strong className="text-white font-medium">intuitives et conformes au RGPD</strong>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
          >
            {/* Magnetic Primary Button */}
            <motion.div style={{ x: btnSmoothX, y: btnSmoothY }} className="relative group w-full sm:w-auto">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 blur opacity-40 group-hover:opacity-100 transition duration-500" />
              <Link
                ref={btnRef}
                href="/contact"
                className="relative flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 bg-white text-black font-bold text-base rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                Démarrer un projet santé
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </motion.div>

            <Link
              href="/portfolio"
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-medium text-base hover:bg-white/5 transition-colors duration-300"
            >
              Explorer nos réalisations
            </Link>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: 3D WIDGETS (Responsive) */}
        <div className="w-full lg:flex-1 relative h-[350px] sm:h-[450px] lg:h-[500px] flex items-center justify-center pointer-events-none mt-10 lg:mt-0">

          {/* Widget 1: Web Code (Top Left) - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ x: widget1X, y: widget1Y, rotateX: widget1RotateX, rotateY: widget1RotateY }}
            className="hidden md:block absolute top-4 -left-8 w-64 glass-strong rounded-2xl p-4 shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-t border-white/20 z-20"
          >
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
              </div>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest ml-2">fhir_api.ts</span>
            </div>
            <div className="space-y-2 text-xs font-mono leading-relaxed">
              <div className="text-primary-400">async <span className="text-white">function</span> <span className="text-secondary-400">syncPatient()</span> {'{'}</div>
              <div className="pl-4 text-gray-300">const res = await <span className="text-white">fetch(</span></div>
              <div className="pl-8 text-green-400">'https://api.hds.fr/fhir/Patient'</div>
              <div className="pl-4 text-white">);</div>
              <div className="pl-4 text-gray-500">// HL7 Encrypted Payload</div>
              <div className="pl-4 text-gray-300">return <span className="text-secondary-400">decrypt(res)</span>;</div>
              <div className="text-primary-400">{'}'}</div>
            </div>
          </motion.div>

          {/* Widget 2: Dashboard Chart (Bottom Right) - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ x: widget2X, y: widget2Y, rotateX: widget2RotateX, rotateY: widget2RotateY }}
            className="hidden md:block absolute bottom-10 -right-4 w-72 glass rounded-2xl p-5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10 z-10"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Uptime Serveur HDS</span>
              <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-full">99.99%</span>
            </div>
            <div className="flex items-end gap-2 h-24">
              {[85, 90, 88, 95, 92, 98, 100].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 1, delay: 1.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 bg-gradient-to-t from-primary-500 to-secondary-400 rounded-t-md opacity-80"
                />
              ))}
            </div>
          </motion.div>

          {/* Widget 3: Mobile UI (Center Overlapping) - Visible on mobile but scaled */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ x: widget3X, y: widget3Y, rotateX: widget3RotateX, rotateY: widget3RotateY }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-[22rem] rounded-[2rem] bg-black/80 backdrop-blur-3xl shadow-[0_0_60px_rgba(59,130,246,0.3)] border-2 border-white/10 p-2 overflow-hidden z-30"
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl z-20" />

            {/* Mobile App Screen */}
            <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden bg-[#0a0a0a] flex flex-col p-4 pt-8">
              
              {/* Top Bar: Avatar & Greeting */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-gradient-to-tr from-primary-500 to-secondary-500 p-[2px]">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-white/10" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400">Bonjour,</div>
                    <div className="text-xs font-bold text-white">Alexandre</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="size-1.5 rounded-full bg-white/20" />
                  <div className="size-1.5 rounded-full bg-white/20" />
                  <div className="size-1.5 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Main Card: Revenue / Stats */}
              <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-primary-500/80 to-secondary-500/80 border border-white/20 mb-5 p-4 flex flex-col justify-between relative overflow-hidden shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
                <div className="relative z-10">
                  <div className="text-[10px] text-white/80 font-medium uppercase tracking-wider mb-1">Dossiers Sécurisés</div>
                  <div className="text-2xl font-extrabold text-white">12 450</div>
                </div>
                <div className="relative z-10 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-green-400/20 text-green-300 text-[10px] font-bold border border-green-400/30">
                    Chiffré AES-256
                  </span>
                  <span className="text-[9px] text-white/70">Conforme RGPD</span>
                </div>
              </div>

              {/* List: Recent Activity */}
              <div className="space-y-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] font-bold text-white">Activité clinique</span>
                  <span className="text-[9px] text-primary-400 cursor-pointer">Voir tout</span>
                </div>

                <div className="w-full p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3 backdrop-blur-md">
                  <div className="size-7 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/20">
                    <svg className="size-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-white">CR d'Hospitalisation</div>
                    <div className="text-[8px] text-gray-400">Validé par le Dr. Martin</div>
                  </div>
                  <div className="text-[10px] font-bold text-gray-400">10:42</div>
                </div>

                <div className="w-full p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3 backdrop-blur-md">
                  <div className="size-7 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/20">
                    <svg className="size-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-white">Alerte Constantes</div>
                    <div className="text-[8px] text-gray-400">Chambre 402 - Urgence</div>
                  </div>
                  <div className="size-2 rounded-full border-2 border-red-500 animate-pulse" />
                </div>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/30 rounded-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </header>
  );
}

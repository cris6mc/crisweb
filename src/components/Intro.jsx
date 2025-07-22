"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tags = [
  "Full-Stack Developer",
  "Especialista en procesos",
  "Ingeniero de Sistemas",
  "Desarrollador Móvil",
];

function Intro() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tags.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col h-screen justify-center items-center text-center px-4 overflow-hidden bg-gradient-to-tr from-[#0f172a] via-[#0a192f] to-[#0f172a]">
      {/* Geometría tech: panel */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 backdrop-blur-lg rotate-12 rounded-lg border border-cyan-400/20 shadow-[0_0_80px_20px_rgba(0,255,255,0.05)]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      />

      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-blue-500/10 backdrop-blur-lg -rotate-12 rounded-xl border border-blue-400/20 shadow-[0_0_60px_10px_rgba(0,0,255,0.05)]"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      />

      {/* Card principal */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.85 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 backdrop-blur-md bg-white/5 border border-cyan-400/20 shadow-[0_20px_50px_rgba(0,255,255,0.1)] rounded-2xl p-10 md:p-16 max-w-2xl transform hover:scale-105 transition-transform duration-500"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">
          Hola, soy <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Cristian Machado
          </span>
        </h1>

        <div className="mt-8 flex items-center gap-3 text-xl md:text-2xl font-semibold text-cyan-200">
          <span>Solo un </span>
          <div className="min-w-[220px] px-5 py-2 bg-cyan-400/10 backdrop-blur-md border border-cyan-500/30 rounded-full shadow-[0_0_30px_rgba(0,255,255,0.2)] transform hover:scale-105 transition-transform duration-500">
            <AnimatePresence mode="wait">
              <motion.span
                key={tags[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="block"
              >
                {tags[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;

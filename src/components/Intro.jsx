"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Intro() {
  const tags = [
    "Full-Stack Developer",
    "Especialista en optimización de procesos",
    "Ingeniero de Sistemas",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tags.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="observer flex flex-col h-screen justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        Hello, I’m <br />
        <span className="text-orange-500">Cristian Machado</span>
      </h1>

      <div className="mt-6 flex items-center gap-2 text-xl md:text-2xl font-medium">
        <span>Just a</span>
        <div className="min-w-[200px] px-3 py-1 bg-blue-100 border border-blue-400 rounded-full text-blue-700">
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
    </section>
  );
}

export default Intro;

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const CuadernoSemanal = () => {
  const [semanas, setSemanas] = useState([]);

  useEffect(() => {
    const fetchCuaderno = async () => {
      const res = await fetch("/data/cuaderno.json");
      const data = await res.json();
      setSemanas(data);
    };

    fetchCuaderno();
  }, []);

  return (
    <section className="text-cyan-100 py-20 px-6" id="cuaderno">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        Cuaderno Semanal
      </h2>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {semanas.map((semana) => (
          <Link
            key={semana.semana}
            href={`/cuaderno/${semana.semana}`}
            className="block transform transition-transform hover:scale-105"
          >
            <div className="backdrop-blur-2xl bg-white/5 border border-cyan-400/20 shadow-[0_10px_30px_rgba(0,255,255,0.1)] hover:shadow-[0_20px_50px_rgba(0,255,255,0.2)] p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">
                Semana {semana.semana}: {semana.titulo}
              </h3>
              <p className="text-cyan-100">{semana.descripcion}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CuadernoSemanal;

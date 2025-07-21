"use client";
import { useEffect, useState } from "react";
import Link from "next/link"; // 👈 Import Link de Next.js

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
    <section className="text-white py-20 px-6" id="cuaderno">
      <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">
        Cuaderno Semanal
      </h2>
      <div className="max-w-6xl mx-auto grid gap-10">
        {semanas.map((semana) => (
          <Link
              href={`/cuaderno/${semana.semana}`}
              className=""
            >
              <div key={semana.semana} className="bg-orange-500 border p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">
              Semana {semana.semana}: {semana.titulo}
            </h3>
            <p className="mb-4">{semana.descripcion}</p>
            
          </div>
            </Link>
          
        ))}
      </div>
    </section>
  );
};

export default CuadernoSemanal;

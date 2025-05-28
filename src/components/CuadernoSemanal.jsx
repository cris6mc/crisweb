"use client";
import { useEffect, useState } from "react";

const CuadernoSemanal = () => {
  const [semanas, setSemanas] = useState([]);

  useEffect(() => {
    const fetchCuaderno = async () => {
      const res = await fetch("/data/cuaderno.json"); // Asegúrate de colocarlo en /public/data
      const data = await res.json();
      setSemanas(data);
    };

    fetchCuaderno();
  }, []);

  return (
    <section className=" text-gray-800 py-20 px-6" id="cuaderno">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
        Cuaderno Semanal
      </h2>
      <div className="max-w-6xl mx-auto grid gap-10">
        {semanas.map((semana, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">{semana.semana}</h3>
            <p><strong>📘 Temas aprendidos:</strong> {semana.temas}</p>
            <p><strong>🧪 Ejercicios realizados:</strong> {semana.ejercicios}</p>
            <p><strong>🧠 Reflexión:</strong> {semana.reflexion}</p>

            <div className="mt-4">
              <a
                href={semana.repositorio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
              >
                Ver repositorio
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CuadernoSemanal;

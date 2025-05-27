"use client";
import { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes integrar tu lógica de envío real, como emailjs, API, etc.
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-8 space-y-6 max-w-3xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="nombre" className="text-sm font-medium text-gray-700 mb-1">
            Tu Nombre
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Cristian Machado"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
            Tu Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="cris6mc@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="mensaje" className="text-sm font-medium text-gray-700 mb-1">
          Tu Mensaje
        </label>
        <textarea
          name="mensaje"
          id="mensaje"
          placeholder="Hi Cristian, let's change the world..."
          value={formData.mensaje}
          onChange={handleChange}
          rows={5}
          required
          className="p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          ¡Contáctame!
        </button>

        <div className="flex space-x-4 text-gray-600">
          <a href="https://www.instagram.com/cristian_mc6/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} className="hover:text-orange-500 transition" />
          </a>
          <a href="https://github.com/cris6mc" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} className="hover:text-orange-500 transition" />
          </a>
          <a href="https://www.linkedin.com/in/cristian-machado-contreras/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} className="hover:text-orange-500 transition" />
          </a>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

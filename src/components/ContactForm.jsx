"use client";
import { useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar el formulario
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="pt-20 rounded-lg space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className='flex flex-col'>
                    <h2>Tu Nombre</h2>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Cristian Machado"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="p-2 border border-gray-500 rounded text-black"
                    />
                </div>
                <div className='flex flex-col'>
                    <h2>Tu Email</h2>
                    <input
                        type="email"
                        name="email"
                        placeholder="cris6mc@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-2 border border-gray-100/20 rounded text-black"
                    />
                </div>


            </div>
            <div className='flex flex-col'>
                <h2>Tu Mensaje</h2>
                <textarea
                    name="mensaje"
                    placeholder="Hi Cristian, let's change the world..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-black"
                    rows="4"
                />
            </div>


            <div className="flex flex-row items-center  justify-between">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full flex items-center justify-center space-x-2">
                    <span>Contact me!</span>
                </button>
                <div className='flex flex-row space-x-4'>
                    <a href='https://www.instagram.com/cristian_mc6/' >
                        <FaInstagram
                            size={32}
                            onClick={
                                console.log("Instagram")
                            }
                        />
                    </a>

                    <a href='https://github.com/cris6mc'>
                        <FaGithub
                            size={32}
                        />
                    </a>

                    <a href='https://www.linkedin.com/in/cristian-machado-contreras/'>
                        <FaLinkedin
                            size={32}
                            onClick={
                                console.log("LinkIn")
                            }
                        />
                    </a>

                </div>

            </div>
        </form>
    );
};

export default ContactForm;

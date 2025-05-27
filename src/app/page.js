import CardProject from "@/components/CardProject";
import ContactForm from "@/components/ContactForm";
import Intro from "@/components/Intro";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-yellow-300 via-orange-400 to-red-400 min-h-screen text-gray-900">
      <Intro />

      {/* Sobre mí */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-8 py-20 max-w-6xl mx-auto">
        {/* <Image
          src="/images/profile-photo.jpg"
          alt="Cristian Machado"
          width={200}
          height={200}
          className="rounded-xl shadow-lg"
        /> */}
        <div className="text-lg md:text-xl font-light leading-relaxed max-w-xl">
          <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
          <p>
            Soy un ingeniero de sistemas con experiencia en desarrollo web y
            móvil multiplataforma. Me especializo en la optimización de procesos
            e implementación de soluciones tecnológicas eficientes que mejoran
            la productividad y la experiencia del usuario.
          </p>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-20 bg-white text-black">
        <h2 className="text-4xl font-bold text-center mb-12">Mis Proyectos</h2>
        <div className="flex flex-wrap justify-center gap-8 px-4 max-w-7xl mx-auto">
          <CardProject
            image="/images/eventmatch.jpg"
            title="EventMatch"
            description="App social para crear y unirse a eventos según intereses comunes."
          />
          <CardProject
            image="/images/bullybuster.jpg"
            title="BullyBuster"
            description="Videojuego educativo para concientizar sobre el bullying."
          />
          <CardProject
            image="/images/cole.jpg"
            title="Web Colegio San Pedro"
            description="Sitio web institucional para una institución educativa rural."
          />
          <CardProject
            image="/images/lota.png"
            title="Plataforma Lota"
            description="Gestión de reservas de canchas deportivas con verificación de pagos."
          />
          <CardProject
            image="/images/investigo.jpg"
            title="InvestiGo"
            description="App con IA que guía el desarrollo de tesis y artículos académicos."
          />
        </div>
      </section>

      {/* Frase motivadora */}
      <section className="py-32 text-center text-white text-2xl md:text-4xl font-semibold bg-black bg-opacity-50">
        “El mejor proceso es el que no existe”
      </section>

      {/* Contacto */}
      <section className="py-20 bg-white text-black">
        <h2 className="text-4xl font-bold text-center mb-10">
          ¿Y si cambiamos el mundo juntos?
        </h2>
        <div className="max-w-3xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

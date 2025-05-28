import CardProject from "@/components/CardProject";
import ContactForm from "@/components/ContactForm";
import CuadernoSemanal from "@/components/CuadernoSemanal";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import ReflexionFinal from "@/components/ReflexionFinal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-gray-900 via-blue-900 to-blue-700 text-gray-100 min-h-screen">

      <Navbar />

      {/* Portada */}
      <div id="portada">
        <Intro />
      </div>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="py-20 px-8 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">Sobre mí</h2>
        <p className="text-xl leading-relaxed">
          Soy Cristian Machado, estudiante de Ingeniería de Sistemas en la Universidad Nacional del Centro del Perú. 
          Me especializo en desarrollo web y móvil con enfoque multiplataforma, y tengo experiencia optimizando procesos mediante soluciones tecnológicas. 
          He liderado y desarrollado proyectos en diversas áreas, desde apps móviles hasta plataformas educativas y de gestión deportiva.
        </p>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="py-20 bg-gray-100 text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Proyectos Concluidos</h2>
        <div className="flex flex-wrap justify-center gap-8 px-4 max-w-7xl mx-auto">
          <CardProject image="/images/eventmatch.jpg" title="EventMatch" description="App social para crear y unirse a eventos." url={"https://github.com/cris6mc/EventMatch"} />
          <CardProject image="/images/bullybuster.jpg" title="BullyBuster" description="Videojuego educativo contra el bullying." url={"https://github.com/cris6mc/PowerUp"} />
          <CardProject image="/images/cole.jpg" title="Web Colegio San Pedro" description="Sitio institucional de una I.E. rural." url={"https://github.com/cris6mc/colegio-san-pedro"} />
          <CardProject image="/images/lota.png" title="Lota" description="Reserva de canchas deportivas con verificación de pago." url={"https://github.com/cris6mc/lota"}/>
          <CardProject image="/images/investigo.jpg" title="InvestiGo" description="App con IA para guiar el desarrollo de tesis." url={"https://github.com/cris6mc/colegio-san-pedro"}/>
        </div>
      </section>

      {/* CUADERNO DE SEMANAS */}
      <section id="cuaderno" className="py-20 px-6 max-w-5xl mx-auto space-y-16">
        <CuadernoSemanal />
        
      </section>

      {/* REFLEXIÓN FINAL */}
      <section id="reflexion-final" className="py-20 px-6 max-w-5xl mx-auto">
        <ReflexionFinal />
      </section>

      {/* BIBLIOGRAFÍA */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">Bibliografía</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Pressman, R. S. (2010). Ingeniería de Software. McGraw-Hill.</li>
          <li>ISO/IEC 25010:2011 – Modelos de calidad de software.</li>
          <li>https://developer.mozilla.org</li>
          <li>https://react.dev</li>
          <li>https://nextjs.org</li>
        </ul>
      </section>

      {/* FRASE MOTIVADORA */}
      <section className="py-32 text-center text-blue-100 text-2xl md:text-4xl font-semibold bg-blue-900 bg-opacity-90">
        “El mejor proceso es el que no existe”
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 bg-gray-100 text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">
          Contacto
        </h2>
        <div className="max-w-3xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

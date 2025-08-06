import CardProject from "@/components/CardProject";
import ContactForm from "@/components/ContactForm";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-[#0f172a] via-[#0a192f] to-[#0f172a] text-cyan-100 min-h-screen">
      <Navbar />

      {/* Portada */}
      <div id="portada">
        <Intro />
      </div>

      {/* SOBRE MÍ */}
      <section
        id="sobre-mi"
        className="relative py-20 px-8 max-w-5xl mx-auto"
      >
        <div className="relative z-10 backdrop-blur-2xl bg-white/5 border border-cyan-400/20 shadow-[0_20px_50px_rgba(0,255,255,0.1)] rounded-2xl p-10 md:p-16">
          <h2 className="text-4xl font-bold text-cyan-400 mb-6">Sobre mí</h2>
          <p className="text-xl leading-relaxed text-cyan-100">
            Soy Cristian Machado, estudiante de Ingeniería de Sistemas en la Universidad Nacional del Centro del Perú.
            Me especializo en desarrollo web y móvil con enfoque multiplataforma, y tengo experiencia optimizando procesos mediante soluciones tecnológicas.
            He liderado y desarrollado proyectos en diversas áreas, desde apps móviles hasta plataformas educativas y de gestión deportiva.
          </p>
        </div>

        {/* Figura decorativa */}
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-cyan-500/10 backdrop-blur-lg rotate-12 rounded-xl border border-cyan-400/20 shadow-[0_0_80px_10px_rgba(0,255,255,0.05)]" />
      </section>

      {/* PROYECTOS */}
      <section
        id="proyectos"
        className="relative py-20 bg-gradient-to-tr from-[#0f172a] via-[#0a192f] to-[#0f172a]"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Proyectos Concluidos
        </h2>
        <div className="flex flex-wrap justify-center gap-8 px-4 max-w-7xl mx-auto">
          <CardProject
            image="/images/eventmatch.jpg"
            title="EventMatch"
            description="App social para crear y unirse a eventos."
            url={"https://github.com/cris6mc/EventMatch"}
          />
          <CardProject
            image="/images/bullybuster.jpg"
            title="BullyBuster"
            description="Videojuego educativo contra el bullying."
            url={"https://github.com/cris6mc/PowerUp"}
          />
          <CardProject
            image="/images/cole.jpg"
            title="Web Colegio San Pedro"
            description="Sitio institucional de una I.E. rural."
            url={"https://github.com/cris6mc/colegio-san-pedro"}
          />
          <CardProject
            image="/images/lota.png"
            title="Lota"
            description="Reserva de canchas deportivas con verificación de pago."
            url={"https://github.com/cris6mc/lota"}
          />
          <CardProject
            image="/images/investigo.jpg"
            title="InvestiGo"
            description="App con IA para guiar el desarrollo de tesis."
            url={"https://github.com/cris6mc/colegio-san-pedro"}
          />
        </div>

        {/* Figura decorativa */}
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-blue-500/10 backdrop-blur-lg -rotate-12 rounded-xl border border-blue-400/20 shadow-[0_0_80px_10px_rgba(0,0,255,0.05)]" />
      </section>

      {/* FRASE MOTIVADORA */}
      <section className="py-32 text-center text-cyan-200 text-2xl md:text-4xl font-semibold bg-[#0a192f]">
        “El mejor proceso es el que no existe”
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="relative py-20 bg-gradient-to-tr from-[#0f172a] via-[#0a192f] to-[#0f172a]"
      >
        <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">
          Contacto
        </h2>
        <ContactForm />
      </section>
    </main>
  );
}

import CardProject from "@/components/CardProject";
import ContactForm from "@/components/ContactForm";
import Description from "@/components/Description";
import Intro from "@/components/Intro";
import Nebulosa from "@/components/Spline";
import Image from "next/image";

function Home() {
  return (
    <div className="absolute flex-col bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
      <Intro />

      <div className={`flex flex-wrap h-screen m-20 text-left text-2xl justify-center items-center`}>

        <Image src="/images/profile-photo.jpg" alt="yo" width={200} height={200}
          style={
            { borderRadius: "5%" }
          } />
        <div className="w-3/4">
          <h1 className="m-4">
            Soy un ingeniero de sistemas con experiencia en el desarrollo web y móvil multiplataforma. <br/>Tambien poseo una habilidad para la optimización de procesos y la implementación de soluciones tecnológicas eficientes que mejoran la productividad y la experiencia del usuario.
          </h1>
        </div>

      </div>

      <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-4xl">Mi experiencia con...</h1>
        <div className="flex flex-wrap items-start justify-center">
          <CardProject image={"/images/eventmatch.jpg"} title={"EventMatch"} description={"Una app"}/>
          <CardProject image={"/images/bullybuster.jpg"} title={"Bullybuster"} description={"Un juego"}/>
          <CardProject image={"/images/cole.jpg"} title={"Web Colegio San Pedro"} description={"Una web de un colegio"}/>

          <CardProject image={"/images/lota.png"} title={"Plataforma Lota"} description={"Una plataforma para la gestion de campos deportivos"}/>
          <CardProject image={"/images/investigo.jpg"} title={"App InvestiGo"} description={"App con IA para mejorar las habilidades de investigacion"}/>
        </div>
      </div>

      {/* frase */}
      <div className="flex h-screen justify-center items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl observe">
        "El mejor proceso es el que no existe"
      </div>
      {/* estoy trabajando en... */}

      {/* trabajos */}
      <div className="flex flex-col h-screen justify-center items-center observe">
        <h1 className="text-center text-4xl font-bold">
          What if we change the world?
        </h1>
        <ContactForm />
      </div>
    </div>

  );
}

export default Home;

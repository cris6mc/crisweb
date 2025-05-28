import DownloadButton from "./DownloadButton";

const ReflexionFinal = () => {
  const contenido = `
🧠 Reflexión Final:

Durante este curso aprendí de manera progresiva y práctica sobre el desarrollo web moderno, pasando desde lo estructural hasta lo dinámico. Lo que más me ayudó fue aplicar lo aprendido en proyectos reales y revisar errores propios.

Me di cuenta que aprendo mejor practicando, iterando, y colaborando. Esta experiencia me ha dado más confianza para afrontar retos más complejos en el desarrollo de software.
`;

  return (
    <section >
      <div className="max-w-4xl mx-auto text-lg">
        <h2 className="text-3xl font-bold mb-6 text-white">Reflexión Final</h2>
        <pre className="whitespace-pre-wrap">{contenido}</pre>
      </div>
    </section>
  );
};

export default ReflexionFinal;

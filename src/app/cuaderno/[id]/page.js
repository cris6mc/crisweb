import { notFound } from "next/navigation";

export default async function SemanaDetalle({ params }) {
  const { id } = params;

  const filePath = path.join(process.cwd(), "public", "data", "cuaderno.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(fileContents);

  const semana = data.find((s) => s.semana === Number(id));

  if (!semana) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 px-4 py-12">
      <div className="w-full max-w-5xl backdrop-blur-2xl bg-white/5 border border-cyan-400/20 shadow-[0_20px_50px_rgba(0,255,255,0.1)] rounded-2xl p-8 md:p-12">
        
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-cyan-300 mb-4">
            Semana {semana.semana}: {semana.titulo}
          </h1>
          <p className="text-lg text-cyan-200 max-w-3xl mx-auto">
            {semana.descripcion}
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b border-cyan-400/20 pb-2">
            📌 Temas
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {semana.temas.map((tema, index) => (
              <li
                key={index}
                className="backdrop-blur-lg bg-white/5 border border-cyan-400/10 rounded-lg p-4 text-cyan-100 shadow-[0_4px_15px_rgba(0,255,255,0.05)]"
              >
                ✅ {tema}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b border-cyan-400/20 pb-2">
            💻 Ejemplo de Código
          </h2>
          <pre className="bg-white/10 border border-cyan-400/10 text-cyan-100 p-6 rounded-xl overflow-auto text-sm shadow-inner">
            <code>{semana.codigo}</code>
          </pre>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b border-cyan-400/20 pb-2">
            ✨ Reflexión
          </h2>
          <p className="text-cyan-100 leading-relaxed">
            {semana.reflexion}
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b border-cyan-400/20 pb-2">
            📚 Bibliografía
          </h2>
          <ul className="list-disc list-inside space-y-2 text-cyan-100">
            {semana.bibliografias.map((biblio, index) => (
              <li key={index}>{biblio}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

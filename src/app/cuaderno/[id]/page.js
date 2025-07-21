import { notFound } from "next/navigation";

export default async function SemanaDetalle({ params }) {
  const { id } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/cuaderno.json`);
  const data = await res.json();
  const semana = data.find((s) => s.semana === Number(id));

  if (!semana) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 bg-white text-gray-900">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">
        Semana {semana.semana}: {semana.titulo}
      </h1>
      <p className="text-lg mb-6 text-gray-700">{semana.descripcion}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Temas</h2>
        <ul className="list-disc list-inside space-y-1">
          {semana.temas.map((tema, index) => (
            <li key={index} className="text-gray-800">
              {tema}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Ejemplo de Código</h2>
        <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg overflow-auto text-sm border border-gray-300">
          <code>{semana.codigo}</code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Reflexión</h2>
        <p className="text-gray-800">{semana.reflexion}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Bibliografía</h2>
        <ul className="list-disc list-inside space-y-1">
          {semana.bibliografias.map((biblio, index) => (
            <li key={index} className="text-gray-800">
              {biblio}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

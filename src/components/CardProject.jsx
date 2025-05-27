import Image from "next/image";

function CardProject({ image, title, description }) {
  return (
    <div className="w-72 bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl p-4">
      <div className="w-full h-44 relative mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default CardProject;

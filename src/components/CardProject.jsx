import Image from "next/image";

function CardProject({ image, title, description, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="transform transition-transform hover:scale-105"
    >
      <div className="w-72 backdrop-blur-2xl bg-white/5 border border-cyan-400/20 shadow-[0_10px_30px_rgba(0,255,255,0.1)] rounded-2xl overflow-hidden p-4 transition-shadow hover:shadow-[0_20px_50px_rgba(0,255,255,0.2)]">
        <div className="w-full h-44 relative mb-4 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <h3 className="text-xl font-bold text-cyan-200 mb-2">{title}</h3>
        <p className="text-sm text-cyan-100">{description}</p>
      </div>
    </a>
  );
}

export default CardProject;

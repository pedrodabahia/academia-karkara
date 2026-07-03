import { useState } from "react";

const FILTERS = [
  { id: "todas", label: "Todas" },
  { id: "muay-thai", label: "Muay Thai" },
  { id: "jiu-jitsu", label: "Jiu-Jitsu" },
  { id: "grad-muay-thai", label: "Graduações Muay Thai" },
  { id: "grad-jiu-jitsu", label: "Graduações Jiu-Jitsu" },
  { id: "competidores", label: "Competidores" },
];

const PHOTOS = [
  {
    id: 1,
    category: "muay-thai",
    label: "Muay Thai",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "muay-thai",
    label: "Muay Thai",
    image:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "muay-thai",
    label: "Muay Thai",
    image:
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "jiu-jitsu",
    label: "Jiu-Jitsu",
    image:
      "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "jiu-jitsu",
    label: "Jiu-Jitsu",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    category: "jiu-jitsu",
    label: "Jiu-Jitsu",
    image:
      "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    category: "grad-muay-thai",
    label: "Graduação Muay Thai",
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    category: "grad-muay-thai",
    label: "Graduação Muay Thai",
    image:
      "https://images.unsplash.com/photo-1521805103424-d8f8430e8933?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    category: "grad-jiu-jitsu",
    label: "Graduação Jiu-Jitsu",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    category: "grad-jiu-jitsu",
    label: "Graduação Jiu-Jitsu",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
  },
];

function PhotoCard({ photo, index }) {
  return (
    <figure
      className="
        group relative aspect-[4/5] overflow-hidden rounded-xl
        border border-blue-400/15
        transition-all duration-500 ease-out
        hover:border-blue-300/50
        animate-[fadeIn_500ms_ease-out_both]
      "
      style={{ animationDelay: `${(index % 8) * 40}ms` }}
    >
      <img
        src={photo.image}
        alt={photo.label}
        loading="lazy"
        className="
          h-full w-full object-cover
          grayscale-[10%] contrast-110
          transition-transform duration-500 ease-out
          group-hover:scale-110
        "
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-black/85 via-black/10 to-transparent
          opacity-70 transition-opacity duration-500 ease-out
          group-hover:opacity-90
        "
      />

      <figcaption
        className="
          absolute bottom-4 left-4 right-4
          translate-y-1 opacity-0
          transition-all duration-500 ease-out
          group-hover:translate-y-0 group-hover:opacity-100
        "
      >
        <span className="inline-block rounded-full border border-blue-300/60 bg-black/50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-300 backdrop-blur-sm">
          {photo.label}
        </span>
      </figcaption>
    </figure>
  );
}

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("todas");

  const filtered =
    activeFilter === "todas"
      ? PHOTOS
      : PHOTOS.filter((p) => p.category === activeFilter);

  return (
    <section className="relative w-full overflow-hidden bg-black px-[6vw] py-24 sm:py-28 lg:py-32 font-body">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(96,165,250,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto mb-12 max-w-[780px] text-center sm:mb-16">
        <div className="mb-6 inline-flex items-center gap-3.5 text-xs font-bold uppercase tracking-[0.32em] text-blue-400">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
          Galeria
          <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-transparent" />
        </div>

        <h2 className="font-display text-[2.2rem] uppercase leading-[1.08] text-neutral-100 sm:text-5xl lg:text-[3.6rem]">
          Momentos da <span className="text-blue-400">Família Karkará</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[560px] text-[16.5px] leading-relaxed text-neutral-400">
          Treinos, suor e conquistas registrados dentro do nosso tatame.
        </p>
      </div>

      {/* filter buttons */}
      <div className="relative mx-auto mb-10 flex max-w-[1240px] flex-wrap justify-center gap-3 sm:mb-14">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`
                rounded-full border px-5 py-2.5 text-[13px] font-bold uppercase tracking-wider
                transition-all duration-300 ease-out
                ${
                  isActive
                    ? "border-blue-400 bg-blue-400 text-black"
                    : "border-blue-400/30 bg-transparent text-neutral-300 hover:border-blue-400/70 hover:text-blue-300"
                }
              `}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* gallery grid */}
      <div className="relative mx-auto grid max-w-[1240px] grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
        {filtered.map((photo, index) => (
          <PhotoCard key={photo.id} photo={photo} index={index} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="relative mx-auto mt-10 max-w-[1240px] text-center text-neutral-500">
          Nenhuma foto encontrada nessa categoria.
        </p>
      )}
    </section>
  );
}
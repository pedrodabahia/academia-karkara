const TESTIMONIALS = [
  {
    id: "rafael",
    initials: "RM",
    name: "Rafael Mendes",
    role: "Aluno há 1 ano · Jiu-Jitsu",
    quote:
      "Entrei tímido e inseguro. Hoje, um ano depois, sou outra pessoa — mais confiante, mais disciplinado. Os professores realmente se importam com sua evolução.",
  },
  {
    id: "camila",
    initials: "CS",
    name: "Camila Santos",
    role: "Aluna há 2 anos · Muay Thai",
    quote:
      "Já treinei em várias academias, mas nunca senti o acolhimento que sinto aqui. Não é clichê: eles chamam de família porque tratam a gente assim de verdade.",
  },
  {
    id: "joao",
    initials: "JP",
    name: "João Pereira",
    role: "Pai de aluno · Kids",
    quote:
      "Coloquei meu filho de 8 anos e o que mais me impressiona é o respeito que ensinam junto com a técnica. Ele virou uma criança mais focada e educada.",
  },
];

function Stars() {
  return (
    <div className="mb-4 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-[15px] w-[15px] fill-blue-300">
          <path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L10 14.9 4.4 18l1.4-6.2L1 7.5l6.4-.6z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <article
      className="
        group flex flex-col rounded-[18px] border border-blue-400/20
        bg-gradient-to-b from-neutral-900 to-neutral-950
        p-9
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:border-blue-300/55
        hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.7)]
      "
    >
      <div className="mb-1.5 font-display text-[54px] leading-none text-blue-400/50">
        "
      </div>

      <Stars />

      <p className="mb-7 flex-grow text-[15.5px] leading-relaxed text-neutral-100">
        {item.quote}
      </p>

      <div className="flex items-center gap-3.5 border-t border-white/10 pt-5">
        <div className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-300 to-blue-400 font-display text-[15px] text-black">
          {item.initials}
        </div>
        <div>
          <div className="text-[14.5px] font-bold text-neutral-100">{item.name}</div>
          <div className="mt-0.5 text-[12.5px] tracking-wide text-blue-300">{item.role}</div>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black px-[6vw] py-24 sm:py-28 lg:py-32 font-body">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 50% 110%, rgba(96,165,250,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto mb-14 max-w-[780px] text-center sm:mb-20">
        <div className="mb-6 inline-flex items-center gap-3.5 text-xs font-bold uppercase tracking-[0.32em] text-blue-400">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
          Depoimentos
          <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-transparent" />
        </div>

        <h2 className="font-display text-[2.2rem] uppercase leading-[1.08] text-neutral-100 sm:text-5xl lg:text-[3.8rem]">
          O que a <span className="text-blue-400">Família</span> tem a dizer
        </h2>

        <p className="mx-auto mt-6 max-w-[560px] text-[16.5px] leading-relaxed text-neutral-400">
          Histórias reais de pessoas que encontraram na Karkará muito mais do
          que treino — encontraram disciplina, superação e uma segunda
          família.
        </p>
      </div>

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <TestimonialCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
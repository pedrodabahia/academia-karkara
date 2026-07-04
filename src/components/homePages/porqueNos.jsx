const CARDS = [
  {
    id: "familia",
    title: "Ambiente Familiar",
    desc: "Aqui você não é apenas um aluno. Faz parte de uma família que incentiva, apoia e evolui junta.",
    image:
      "/image/jiu1.webp",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor">
        <path d="M12 21s-7.5-4.9-10-9.6C.3 7.8 2.3 4 6 4c2.2 0 3.7 1.2 6 3 2.3-1.8 3.8-3 6-3 3.7 0 5.7 3.8 4 7.4C19.5 16.1 12 21 12 21z" />
      </svg>
    ),
  },
  {
    id: "professores",
    title: "Professores Qualificados",
    desc: "Treine com profissionais experientes que vivem as artes marciais e acompanham sua evolução de perto.",
    image:
      "/image/jiu2.webp",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor">
        <path d="M12 3l2.4 4.9L20 9l-4 3.9.9 5.5L12 15.9 7.1 18.4 8 12.9 4 9l5.6-1.1L12 3z" />
      </svg>
    ),
  },
  {
    id: "estrutura",
    title: "Estrutura Completa",
    desc: "Equipamentos modernos, tatames amplos e um ambiente preparado para oferecer a melhor experiência.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor">
        <path d="M4 12h16M4 12a2 2 0 01-2-2 2 2 0 012-2M4 12a2 2 0 00-2 2 2 2 0 002 2M20 12a2 2 0 002-2 2 2 0 00-2-2M20 12a2 2 0 012 2 2 2 0 01-2 2M7 8v8M17 8v8" />
      </svg>
    ),
  },
  {
    id: "niveis",
    title: "Treinos para Todos os Níveis",
    desc: "Do iniciante ao atleta de competição, nossos treinos respeitam seu ritmo e levam você ao próximo nível.",
    image:
      "/image/competidores/samuel.webp",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor">
        <path d="M12 2c1 3-2 4-2 7a4 4 0 008 0c0-1-.5-2-1-3 1.5 1 3 3 3 6a6 6 0 11-12 0c0-4 2-6 4-10z" />
      </svg>
    ),
  },
];

function Card({ card }) {
  return (
    <article
      className="
        group relative h-[340px] sm:h-[380px] lg:h-[420px] overflow-hidden
        rounded-[20px] border border-blue-400/20 cursor-pointer
        transition-all duration-[420ms] ease-out
        hover:-translate-y-2.5
        hover:shadow-[0_24px_60px_-18px_rgba(43,127,255,0.75),0_0_0_1px_rgba(194,145,61,0.55)]
      "
    >
      {/* background image */}
      <div
        className="
          absolute inset-0 bg-cover bg-center
          grayscale-[15%] contrast-[1.05]
          transition-transform duration-[480ms] ease-out
          group-hover:scale-[1.08]
        "
        style={{ backgroundImage: `url('${card.image}')` }}
      />

      {/* dark overlay */}
      <div
        className="
          absolute inset-0 z-[1]
          bg-gradient-to-b from-black/55 via-black/55 to-black/90
          transition-opacity duration-[400ms] ease-out
          group-hover:opacity-[0.82]
        "
      />

      {/* gold ring on hover */}
      <div
        className="
          pointer-events-none absolute inset-0 z-[3] rounded-[20px]
          ring-1 ring-inset ring-transparent
          transition-all duration-[400ms] ease-out
          group-hover:ring-[1.5px] group-hover:ring-blue-400/90
        "
      />

      {/* icon */}
      <div
        className="
          absolute left-8 top-7 z-[2] flex h-[52px] w-[52px] items-center justify-center
          rounded-full border border-blue-400/50 bg-black/55 backdrop-blur-md
          transition-transform duration-[380ms] ease-out
          group-hover:scale-[1.12] group-hover:border-blue-400
        "
      >
        <div className="h-6 w-6 stroke-blue-400 text-blue-400">{card.icon}</div>
      </div>

      {/* content */}
      <div className="relative z-[2] flex h-full flex-col justify-end p-6 pt-0 sm:p-8">
        <div className="overflow-hidden">
          <h3
            className="
              font-display uppercase tracking-wide text-[22px] sm:text-2xl text-[#f5f3ee]
              transition-transform duration-[380ms] ease-out
              group-hover:-translate-y-1
            "
          >
            {card.title}
          </h3>
        </div>

        <div
          className="
            my-3 h-0.5 w-0
            bg-gradient-to-r from-[#C2913D] to-[#e2b978]
            transition-all duration-[420ms] ease-out
            group-hover:w-14
          "
        />

        <p className="max-w-[380px] text-[14.5px] leading-relaxed text-[#9a968c]">
          {card.desc}
        </p>
      </div>
    </article>
  );
}

export default function FamiliaKarkaraSection() {
  return (
    <section
      className="
        relative w-full overflow-hidden bg-[#0a0a0a]
        px-[6vw] py-24 sm:py-28 lg:py-32
        font-body
      "
    >
      <div className="relative mx-auto mb-14 max-w-[900px] text-center sm:mb-20 lg:mb-22">
        <div className="mb-6 inline-flex items-center gap-3.5 text-xs font-bold uppercase tracking-[0.32em] text-blue-400">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
          Família Karkará
          <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-transparent" />
        </div>

        <h2 className="font-display text-[2.4rem] uppercase leading-[1.04] text-[#f5f3ee] sm:text-6xl lg:text-[4.6rem]">
          Por que escolher a
          <br />
          <span className="text-blue-400 font-capture">Família Karkará?</span>
        </h2>

        <p className="mx-auto mt-7 max-w-[620px] text-base leading-relaxed text-[#9a968c] sm:text-lg">
          Mais do que uma academia. Um lugar onde disciplina, respeito e
          superação transformam pessoas todos os dias.
        </p>
      </div>

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-7">
        {CARDS.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
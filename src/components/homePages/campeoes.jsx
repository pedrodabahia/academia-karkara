import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";
import { COMPETIDORES} from "./competidoresVal";

const WHATSAPP_NUMBER = "5573999649599";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Quero saber como faço pra competir e treinar na Academia Karkará 🥋"
);

const DESTAQUE = {
  name: "Marilton Karkará",
  category: "Jiu-Jitsu · Faixa-preta",
  title: "Campeão Brasileiro 2019 e 2022",
  image:
    "/image/competidores/professor.webp",
};

const LUTADORES = COMPETIDORES;
function LutadorCard({ l, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
      className="
        group relative h-[300px] overflow-hidden rounded-[16px] border border-blue-400/20 cursor-pointer
        transition-all duration-[380ms] ease-out
        hover:-translate-y-2
        hover:shadow-[0_20px_50px_-16px_rgba(43,127,255,0.7),0_0_0_1px_rgba(194,145,61,0.5)]
      "
    >
      <div
        className="absolute inset-0 bg-cover bg-center grayscale-[20%] contrast-[1.05] transition-transform duration-[480ms] ease-out group-hover:scale-[1.08]"
        style={{ backgroundImage: `url('${l.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/95" />

      <div className="pointer-events-none absolute inset-0 rounded-[16px] ring-1 ring-inset ring-transparent transition-all duration-300 group-hover:ring-[1.5px] group-hover:ring-blue-400/80" />

      <span className="absolute right-4 top-4 z-[2] flex h-9 w-9 items-center justify-center rounded-full border border-[#C2913D]/60 bg-black/50 backdrop-blur-md text-[#e2b978]">
        <Medal className="h-4 w-4" />
      </span>

      <div className="relative z-[2] flex h-full flex-col justify-end p-5">
        <span className="text-[10px] uppercase tracking-[0.24em] text-blue-400">
          {l.category}
        </span>
        <h3 className="mt-1 font-display text-xl uppercase text-[#f5f3ee]">
          {l.name}
        </h3>
        <p className="mt-1 text-[13px] leading-snug text-[#9a968c]">{l.title}</p>
      </div>
    </motion.div>
  );
}

export default function HallDaFama() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] px-[6vw] py-24 font-body sm:py-28 lg:py-32">
      <div className="relative mx-auto mb-14 max-w-[900px] text-center sm:mb-20">
        <div className="mb-6 inline-flex items-center gap-3.5 text-xs font-bold uppercase tracking-[0.32em] text-blue-400">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
          Hall da Fama
          <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-transparent" />
        </div>
        <h2 className="font-display text-[2.2rem] uppercase leading-[1.05] text-[#f5f3ee] sm:text-5xl lg:text-[3.6rem]">
          Quem representa a
          <br />
          <span className="text-blue-400 font-capture">Família Karkará</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[560px] text-sm leading-relaxed text-[#9a968c] sm:text-base">
          Dentro e fora do tatame, nossos atletas carregam o nome da Karkará
          para o pódio. Cada título é fruto de disciplina, suor e a força de
          uma equipe inteira por trás.
        </p>
      </div>

      <div className="relative mx-auto max-w-[1240px]">
        {/* destaque */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            relative mb-6 h-[280px] overflow-hidden rounded-[20px] border border-blue-400/40
            sm:h-[340px]
          "
        >
          <div
            className="absolute inset-0 bg-cover bg-[position:50%_5%] grayscale-[15%] contrast-[1.05]"
            style={{ backgroundImage: `url('${DESTAQUE.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/20" />

          <div className="relative z-[2] flex h-full flex-col justify-end p-6 sm:max-w-[440px] sm:justify-center sm:p-10">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#C2913D]/60 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[#e2b978] backdrop-blur-md">
              <Trophy className="h-3.5 w-3.5" />
              Mestre &amp; fundador
            </span>
            <h3 className="mt-4 font-display text-3xl uppercase text-[#f5f3ee] sm:text-4xl">
              {DESTAQUE.name}
            </h3>
            <span className="mt-1 text-xs uppercase tracking-[0.2em] text-blue-400">
              {DESTAQUE.category}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-[#c9c6bd]">
              {DESTAQUE.title}
            </p>
          </div>
        </motion.div>

        {/* grid de lutadores */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {LUTADORES.map((l, i) => (
            <LutadorCard key={l.id} l={l} i={i} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto mt-16 flex max-w-[720px] flex-col items-center gap-6 text-center sm:mt-20"
      >
        <h3 className="font-display text-2xl uppercase text-[#f5f3ee] sm:text-3xl">
          O próximo nome no <span className="text-blue-400 font-capture">Hall da Fama</span> pode ser o seu
        </h3>
        <p className="max-w-[480px] text-sm leading-relaxed text-[#9a968c] sm:text-base">
          Treine com quem já subiu no pódio. Comece hoje sua trajetória na
          Família Karkará.
        </p>
        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="
            inline-flex items-center gap-2 rounded-full bg-blue-500 px-8 py-4
            font-display text-sm uppercase tracking-wide text-white
            shadow-[0_16px_40px_-14px_rgba(59,130,246,0.8)]
            transition-colors duration-300 hover:bg-blue-400
          "
        >
          <Trophy className="h-4 w-4" />
          Quero competir também
        </motion.a>
      </motion.div>
    </section>
  );
}
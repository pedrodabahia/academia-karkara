import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "5573999649599";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Quero agendar uma aula experimental na Academia Karkará 🥋"
);

const MARQUEE_ITEMS = [
  "SUBA NO TATAME",
  "JIU-JITSU",
  "MUAY THAI",
  "MMA",
  "DISCIPLINA",
  "FAMÍLIA KARKARÁ",
];

export default function CTAForte() {
  const marquee = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-24 font-body sm:py-28">
      <style>{`
        @keyframes karkara-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .karkara-marquee-track {
          animation: karkara-marquee 26s linear infinite;
        }
      `}</style>

      {/* ambient glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(96,165,250,0.16) 0%, rgba(96,165,250,0) 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[760px] px-[6vw] text-center">
        <div className="mb-6 inline-flex items-center gap-3.5 text-xs font-bold uppercase tracking-[0.32em] text-blue-400">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
          Sua primeira aula é hoje
          <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-transparent" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-[2.4rem] uppercase leading-[1.05] text-[#f5f3ee] sm:text-6xl lg:text-[4rem]"
        >
          Chega de assistir.
          <br />
          <span className="text-blue-400 font-capture">Suba no tatame.</span>
        </motion.h2>

        <p className="mx-auto mt-6 max-w-[520px] text-base leading-relaxed text-[#9a968c] sm:text-lg">
          Marque sua aula experimental gratuita e sinta na pele por que a
          Família Karkará forma tanto atleta — e tanto caráter.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
            Agendar aula experimental
          </motion.a>

          <motion.a
            href="#localizacao"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="
              inline-flex items-center gap-2 rounded-full border border-blue-400/50 px-8 py-4
              font-display text-sm uppercase tracking-wide text-blue-400
              transition-colors duration-300 hover:border-blue-400 hover:bg-blue-400/5
            "
          >
            Ver localização
          </motion.a>
        </div>
      </div>
    </section>
  );
}
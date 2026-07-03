import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "5573999649599";
const WHATSAPP_DISPLAY = "(73) 99964-9599";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Vi o site da Academia Karkará e quero saber mais sobre as aulas 🥋"
);
const INSTAGRAM_HANDLE = "@fit_espaco";
const EMAIL = "mariltonpm@hotmail.com";
const TELEFONE_DISPLAY = "(73) 99964-9599";
const ENDERECO = "Avenida João Durval Carneiro, 887, Centro, Posto da Mata - BA";
const MAPS_QUERY = encodeURIComponent(ENDERECO);

const ACOES = [
  {
    id: "rota",
    label: "Ver rota",
    value: "Traçar caminho até a academia",
    href: `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`,
    primary: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-8-8 18-2-8-8-2z" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.5 8.5 0 01-12.36 7.56L3 20l1.05-5.5A8.5 8.5 0 1121 11.5z" />
        <path d="M8.5 10a.5.5 0 001 0v-.5a.5.5 0 00-1 0v.5zM8.5 10c0 3 2.5 5.5 5.5 5.5h.5a.5.5 0 000-1H14a.5.5 0 00-.5.5" />
      </svg>
    ),
  },
  {
    id: "ligacao",
    label: "Ligar",
    value: TELEFONE_DISPLAY,
    href: `tel:+${WHATSAPP_NUMBER}`,
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.68 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    id: "email",
    label: "E-mail",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M3.5 7l8.5 6 8.5-6" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    value: INSTAGRAM_HANDLE,
    href: `https://instagram.com/${INSTAGRAM_HANDLE.replace("@", "")}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Localizacao() {
  return (
    <section
      id="localizacao"
      className="relative w-full overflow-hidden bg-[#0a0a0a] px-[6vw] py-24 font-body sm:py-28 lg:py-32"
    >
      <div className="relative mx-auto mb-14 max-w-[900px] text-center sm:mb-20">
        <div className="mb-6 inline-flex items-center gap-3.5 text-xs font-bold uppercase tracking-[0.32em] text-blue-400">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
          Onde Estamos
          <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-transparent" />
        </div>
        <h2 className="font-display text-[2.2rem] uppercase leading-[1.05] text-[#f5f3ee] sm:text-5xl lg:text-[3.6rem]">
          Venha treinar
          <br />
          <span className="text-blue-400 font-capture">com a gente</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[460px] text-sm leading-relaxed text-[#9a968c]">
          {ENDERECO}
        </p>
      </div>

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 gap-6 lg:grid-cols-[400px_1fr] lg:items-start lg:gap-8">
        {/* action buttons */}
        <div className="flex flex-col gap-4">
          {ACOES.map((a, i) => (
            <motion.a
              key={a.id}
              href={a.href}
              target={a.external === false ? undefined : "_blank"}
              rel={a.external === false ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ x: 4 }}
              className={`
                group flex items-center gap-4 rounded-2xl border p-5
                transition-colors duration-300
                ${a.primary
                  ? "border-blue-400/70 bg-blue-400/[0.08] hover:bg-blue-400/[0.14]"
                  : "border-blue-400/15 bg-white/[0.02] hover:border-blue-400/50 hover:bg-blue-400/[0.04]"}
              `}
            >
              <span
                className={`
                  flex h-12 w-12 shrink-0 items-center justify-center rounded-full border
                  transition-transform duration-300 group-hover:scale-110
                  ${a.primary ? "border-blue-400 bg-blue-400 text-black" : "border-blue-400/40 text-blue-400"}
                `}
              >
                <span className="h-5 w-5">{a.icon}</span>
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-[#6f6c64]">
                  {a.label}
                </span>
                <span className="block truncate font-display text-lg text-[#f5f3ee] sm:max-w-[220px]">
                  {a.value}
                </span>
              </span>
              <svg
                viewBox="0 0 24 24"
                className="ml-auto h-4 w-4 shrink-0 text-blue-400/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H9M17 7v8" />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* square map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative aspect-square w-full overflow-hidden rounded-[20px] border border-blue-400/20"
        >
          <iframe
            title="Localização da Academia Karkará"
            src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
            className="absolute inset-0 h-full w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-blue-400/20" />
        </motion.div>
      </div>
    </section>
  );
}
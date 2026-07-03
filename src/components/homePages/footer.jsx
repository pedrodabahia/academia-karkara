import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "5573999649599";
const WHATSAPP_DISPLAY = "(73) 99964-9599";
const INSTAGRAM_HANDLE = "@fit_espaco";

const SITEMAP = [
  { label: "Início", href: "#inicio" },
  { label: "Família Karkará", href: "#familia" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Localização", href: "#localizacao" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-blue-400/10 bg-[#070707] px-[6vw] pb-8 pt-20 font-body">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
        {/* brand */}
        <div>
          <h3 className="font-display text-2xl uppercase tracking-wide text-[#f5f3ee]">
            Família <span className="text-blue-400 font-capture">Karkará</span>
          </h3>
          <p className="mt-4 max-w-[320px] text-sm leading-relaxed text-[#9a968c]">
            Mais do que uma academia. Um lugar onde disciplina, respeito e
            superação transformam pessoas todos os dias.
          </p>
        </div>

        {/* sitemap */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-blue-400">
            Navegação
          </span>
          <ul className="mt-5 flex flex-col gap-3">
            {SITEMAP.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-sm text-[#9a968c] transition-colors duration-300 hover:text-[#f5f3ee]"
                >
                  <span className="h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-4" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* contact */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-blue-400">
            Contato
          </span>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-[#9a968c]">
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#f5f3ee]"
              >
                WhatsApp · {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#f5f3ee]"
              >
                Instagram · {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li className="text-[#6f6c64]">Posto da Mata, Bahia</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[1240px] border-t border-blue-400/10 pt-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-[#6f6c64]">
            © {year} Família Karkará. Todos os direitos reservados.
          </p>

          <motion.a
            href="https://studiomatos.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 2 }}
            className="group inline-flex items-center gap-1.5 text-xs text-[#6f6c64] transition-colors duration-300 hover:text-blue-400"
          >
            Desenvolvido por
            <span className="font-display tracking-wide text-[#9a968c] transition-colors duration-300 group-hover:text-blue-400">
              Studio Matos
            </span>
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H9M17 7v8" />
            </svg>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
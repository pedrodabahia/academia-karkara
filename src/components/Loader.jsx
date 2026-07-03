import React, { useRef, useState } from "react";
import Belt from "./Belt";
import Logo from "./Logo";
import { useLoaderAnimation } from "./hooks/useLoaderAnimation";
import "./styles/loader.css";

/**
 * Loader.jsx
 * ----------
 * Overlay de carregamento da Academia Karkará.
 *
 * Uso recomendado:
 *
 *   function App() {
 *     const [loading, setLoading] = useState(true);
 *     return (
 *       <>
 *         {loading && <Loader onComplete={() => setLoading(false)} />}
 *         <SiteContent />
 *       </>
 *     );
 *   }
 *
 * Note que <SiteContent /> já é renderizado desde o início, por baixo do
 * loader. Isso é o que garante a transição contínua: quando a faixa termina
 * de saída pela esquerda, o site já está lá, pronto — não há "salto" nem
 * fade entre loader e página.
 *
 * O próprio <Loader /> remove-se do fluxo (display: none) após o término da
 * animação, liberando pointer-events para a página real.
 */
export default function Loader({ onComplete }) {
  const wrapperRef = useRef(null);
  const tipRef = useRef(null);
  const logoRef = useRef(null);
  const [finished, setFinished] = useState(false);

  useLoaderAnimation({
    wrapperRef,
    tipRef,
    logoRef,
    onComplete: () => {
      setFinished(true);
      onComplete?.();
    },
  });

  return (
    <div
      className="loader-root"
      style={{ opacity: finished ? "0" : "1" , transition : "all 1s ease"}}
    >
      <Belt wrapperRef={wrapperRef} tipRef={tipRef} />
      <Logo ref={logoRef} />
    </div>
  );
}

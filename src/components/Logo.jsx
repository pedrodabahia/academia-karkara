import React, { forwardRef } from "react";

/**
 * Logo.jsx
 * --------
 * Logotipo da Academia Karkará, exibido no centro da tela apenas no instante
 * em que a faixa cobre 100% da viewport. A animação (fade + scale) é
 * controlada externamente pelo GSAP timeline em useLoaderAnimation.js —
 * este componente só define a marcação e o estado visual inicial (oculto).
 */
const Logo = forwardRef(function Logo(_, ref) {
  return (
    <div ref={ref} className="loader-logo" aria-hidden="true">
      <svg viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg">
        {/* Emblema minimalista: três traços formando um "K", remetendo a uma postura/golpe */}
        <g fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round">
          <line x1="40" y1="20" x2="40" y2="70" />
          <line x1="40" y1="45" x2="68" y2="20" />
          <line x1="40" y1="45" x2="68" y2="70" />
        </g>
        <rect x="36" y="44" width="8" height="8" rx="2" fill="#C8102E" />

        <text x="92" y="58" className="loader-logo__word">
          KARKARÁ
        </text>
        <text x="93" y="80" className="loader-logo__sub">
          ACADEMIA DE ARTES MARCIAIS
        </text>
      </svg>
    </div>
  );
});

export default Logo;

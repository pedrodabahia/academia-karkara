import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

/**
 * useLoaderAnimation.js
 * ---------------------
 * Centraliza toda a coreografia do loader em uma única GSAP Timeline,
 * para manter os tempos sincronizados e fáceis de ajustar.
 *
 * Fases:
 *  1. ENTRADA  -> a faixa entra pela direita e avança até cobrir 100% da tela.
 *  2. LOGO     -> com a tela 100% coberta, o logo aparece (fade + scale).
 *  3. SAÍDA    -> a faixa continua o movimento para fora pela esquerda,
 *                 revelando o site (que já está renderizado por baixo).
 *
 * Durante as fases de movimento (1 e 3), um tween paralelo e independente
 * cuida das "micro-oscilações" da ponta da faixa — pequenas rotações e
 * deslocamentos verticais que dão a ilusão de tecido sendo puxado, sem
 * qualquer simulação física real.
 */

// ---- Constantes nomeadas (evita números mágicos espalhados no código) ----
const BELT_ENTER_X_VW = 100; // posição inicial: totalmente fora da tela, à direita
const BELT_COVER_X_VW = -140; // posição em que a faixa cobre 100% da viewport
const BELT_EXIT_X_VW = -285; // posição final: totalmente fora da tela, à esquerda

const DURATION_ENTER = 2.05; // segundos para cobrir a tela
const DURATION_EXIT = 0.5; // segundos para saída completa
const LOGO_HOLD_MS = 500; // tempo que o logo permanece visível, em ms

const TIP_OSCILLATION_DURATION = 0.16; // duração de cada micro-oscilação da ponta
const TIP_ROTATION_DEG = 2.4; // amplitude da rotação da ponta
const TIP_TRANSLATE_Y = 4; // amplitude do deslocamento vertical da ponta

const EASE_ENTER = "power3.inOut"; // entrada com aceleração e frenagem suaves
const EASE_EXIT = "power2.in"; // saída acelerando, como se fosse "puxada" para fora
const EASE_LOGO_IN = "power2.out";
const EASE_LOGO_OUT = "power1.in";

export function useLoaderAnimation({ wrapperRef, tipRef, logoRef, onComplete }) {
  const timelineRef = useRef(null);
  const tipLoopRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Acessibilidade: usuários que pedem "reduced motion" não veem a
    // coreografia inteira — vamos direto para o estado final.
    if (prefersReducedMotion) {
      gsap.set(wrapperRef.current, { xPercent: 0, x: `${BELT_EXIT_X_VW}vw` });
      onComplete?.();
      return;
    }

    const ctx = gsap.context(() => {
      // Loop contínuo e sutil da ponta — começa junto com a entrada.
      tipLoopRef.current = gsap.to(tipRef.current, {
        rotation: TIP_ROTATION_DEG,
        y: TIP_TRANSLATE_Y,
        duration: TIP_OSCILLATION_DURATION,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      const tl = gsap.timeline({
        defaults: { overwrite: "auto" },
        onComplete: () => {
          tipLoopRef.current?.kill();
          onComplete?.();
        },
      });

      // Estado inicial: faixa totalmente fora da tela, à direita.
      tl.set(wrapperRef.current, { x: `${BELT_ENTER_X_VW}vw` });
      tl.set(logoRef.current, { opacity: 0, scale: 0.95 });

      // 1) ENTRADA — a faixa avança até cobrir 100% da viewport.
      tl.to(wrapperRef.current, {
        x: `${BELT_COVER_X_VW}vw`,
        duration: DURATION_ENTER,
        ease: EASE_ENTER,
      });

      // 2) LOGO — tela já coberta, marca aparece com fade + scale sutil.
      tl.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: EASE_LOGO_IN,
      });

      // Pequena pausa para o logo "respirar" na tela.
      tl.to({}, { duration: LOGO_HOLD_MS / 1000 });

      // Logo some rapidamente, um instante antes da faixa retomar o movimento.
      tl.to(logoRef.current, {
        opacity: 0,
        scale: 0.97,
        duration: 0.2,
        ease: EASE_LOGO_OUT,
      });

      // 3) SAÍDA — a faixa continua o trajeto para fora, revelando o site.
      tl.to(wrapperRef.current, {
        x: `${BELT_EXIT_X_VW}vw`,
        duration: DURATION_EXIT,
        ease: EASE_EXIT,
      });
    });

    timelineRef.current = ctx;

    return () => {
      tipLoopRef.current?.kill();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return timelineRef;
}

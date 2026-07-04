import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const BELT_ENTER_X = 100;
const BELT_COVER_X = -140;
const BELT_EXIT_X = -285;

const DURATION_ENTER = 2.05;
const DURATION_EXIT = 0.5;
const LOGO_HOLD = 0.5;

export function useLoaderAnimation({
  wrapperRef,
  tipRef,
  logoRef,
  onComplete,
}) {
  const timelineRef = useRef(null);
  const tipTweenRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(wrapperRef.current, {
        xPercent: BELT_EXIT_X,
      });

      onComplete?.();
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(tipRef.current, {
        force3D: true,
        transformOrigin: "80% 50%",
      });

      tipTweenRef.current = gsap.to(tipRef.current, {
        y: 3,
        skewX: 1,
        duration: 0.18,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        force3D: true,
      });

      const tl = gsap.timeline({
        defaults: {
          overwrite: "auto",
        },
        onComplete: () => {
          tipTweenRef.current?.kill();
          onComplete?.();
        },
      });

      gsap.set(wrapperRef.current, {
        x: "100vw",
        force3D: true,
      });

      gsap.set(logoRef.current, {
        opacity: 0,
        scale: 0.95,
      });

      tl.to(wrapperRef.current, {
        x: "-140vw",
        duration: DURATION_ENTER,
        ease: "power3.inOut",
        force3D: true,
      });

      tl.to(logoRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      tl.to({}, { duration: LOGO_HOLD });

      tl.to(logoRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power1.in",
      });

      tl.to(wrapperRef.current, {
        x: "-285vw",
        duration: DURATION_EXIT,
        ease: "power2.in",
        force3D: true,
      });
    });

    timelineRef.current = ctx;

    return () => {
      tipTweenRef.current?.kill();
      ctx.revert();
    };
  }, []);

  return timelineRef;
}
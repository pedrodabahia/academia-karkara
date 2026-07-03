import { useEffect, useRef, useState } from "react";
import { useInView } from "./useInview";
import { cn } from "./utils";

const stats = [
  { value: 20, suffix: "+", label: "Competidores" },
  { value: 10, suffix: "+ anos", label: "De Experiência" },
  { value: 200, suffix: "+", label: "Atletas Graduados" },
  { value: 98, suffix: "%", label: "Satisfação" },
  { value: 6, suffix: "+", label: "Faixas Preta" },
];

function StatItem({ value, suffix, label, delay, trigger }: { value: number; suffix: string; label: string; delay: string; trigger: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;
    const duration = 2000;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [trigger, value]);

  return (
    <div className={cn("flex flex-col items-center gap-1 reveal", trigger && "visible", delay)}>
      <span className="font-display text-4xl md:text-4xl font-semibold text-blue-400 tabular-nums">
        {count}{suffix}
      </span>
      <span className="font-body text-sm text-blue-400 tracking-wide text-center">{label}</span>
    </div>
  );
}

export default function StatsCounter() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section className="bg-black py-5 relative  z-2 w-full lg:w-[100vw]">
      <div
        ref={ref}
        className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-6"
      >
        {stats.map((stat, i) => (
          <StatItem
            key={stat.label}
            {...stat}
            trigger={inView}
            delay={`delay-${(i + 1) * 100}`}
          />
        ))}
      </div>
    </section>
  );
}

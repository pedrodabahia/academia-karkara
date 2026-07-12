import React from 'react';
import { Flame, Shield, Dumbbell, Swords, HandFist } from 'lucide-react';

// Troque a "image" pela URL real da foto de cada modalidade
// (uma foto sua, ou de um banco de imagens de uso livre como Unsplash/Pexels).
// Sem imagem definida, entra um gradiente de placeholder no lugar.
const modalities = [
  { name: 'Muay Thai', Icon: Flame, image: "/image/modle2.webp" },
  { name: 'Jiu-Jitsu', Icon: Shield, image: "/image/modle5.webp" },
  { name: 'Musculação', Icon: Dumbbell, image: "/image/modle1.webp" },
  { name: 'MMA', Icon: Swords, image: "/image/modle4.webp" },
  { name: 'Boxe', Icon: HandFist, image: "/image/modle3.webp" },
];

function Card({ name, Icon, image, delay }) {

  return (
    <div
      className="fm-card group relative w-full aspect-[4/3] sm:aspect-square overflow-hidden rounded-[6px] border border-white/10 bg-gradient-to-b from-blue-900/50 to-blue-950/20 px-4 py-6 sm:px-6 sm:py-10 flex flex-col items-center justify-center gap-4 sm:gap-6 cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.06] hover:border-blue-600/40 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.7)] hover:z-20"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* foto de fundo da modalidade, some por padrão e surge com opacidade baixa no hover */}
      <div
        className="fm-photo pointer-events-none absolute inset-0 scale-110 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-25"
        style={
          image
            ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: '0% 10%' }
            : { background: 'radial-gradient(circle at 50% 40%, rgba(225,29,46,0.5), transparent 65%)' }
        }
      />

      {/* leve escurecida por cima da foto pra manter ícone/texto legíveis */}
      <div className="pointer-events-none absolute inset-0 bg-zinc-950/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* faixa de reflexo animada (loop infinito, some no hover) */}
      <div className="fm-sweep pointer-events-none absolute inset-0" />

      <Icon
        strokeWidth={1.25}
        className="relative z-10 h-7 w-7 sm:h-10 sm:w-10 text-zinc-300 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-500"
      />
      <span className="fm-name relative z-10 text-[11px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-zinc-200 transition-colors duration-300 group-hover:text-white text-center">
        {name}
      </span>
    </div>
  );
}

export default function FightModalities() {
        function abrirWhatsApp(mensagem = '') {
  const numero = '5573999649599'; // 55 (Brasil) + DDD + número
  const texto = encodeURIComponent(mensagem);
  const url = `https://wa.me/${numero}${texto ? `?text=${texto}` : ''}`;
  window.open(url, '_blank');
}
  return (

    <div className="w-full bg-zinc-950 px-2 sm:px-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600&display=swap');

        .fm-name { font-family: 'Oswald', sans-serif; }

        @keyframes fm-sweep-anim {
          0%   { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(250%) skewX(-20deg); }
        }

        .fm-sweep {
          width: 35%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
          animation: fm-sweep-anim 3.4s ease-in-out infinite;
        }

        .group:hover .fm-sweep {
          animation-play-state: paused;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
      `}</style>

      <div onClick={abrirWhatsApp("Olá, vim pelo site da karkará")} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-6xl mx-auto">
        {modalities.map((m, i) => (
          <Card key={m.name} name={m.name} Icon={m.Icon} image={m.image} delay={i * 0.45} />
        ))}
      </div>
    </div>
  );
}
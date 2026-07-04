import "../../App.css"
import { useState } from "react";
import Faixa from '../hooks/Faixa'
import { Mouse } from "lucide-react"


export default function Hero(){
    const [pos, setPos] = useState({x: 50, y:50});

    function handleMouseMove(e){
        const rect = e.currentTarget.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setPos({x,y})
    }

    return(
        <section className="w-full min-h-screen text-center overflow-hidden">
            <div
            onMouseMove={handleMouseMove}
            className="relative overflow-hidden pt-45 sm:pt-56 lg:pt-70 pb-24 text-white min-h-screen bg-[position:0_40%] bg-no-repeat bg-cover">
            <div className="text-white h-full w-full opacity-30 bg-no-repeat bg-cover bg-center absolute z-0 top-0" style={{backgroundImage : "url('/image/gradMuay1.webp')"}}></div>
            <div className="absolute inset-0" style={{background: `radial-gradient(
            circle 500px at ${pos.x}% ${pos.y}%,
            rgba(200,200,0,0.1) 0%,
            rgba(0,0,0,0.85) 70%
          )`,}} />

            <div className="relative z-10 px-4 sm:px-6">

                <div className="relative mx-auto mb-5 max-w-[900px] text-center">
                    <div className="mb-6 inline-flex items-center gap-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.32em] text-blue-400">
                    <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
                    Família Karkará
                    <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-transparent" />
                    </div>
                </div>

                <h1 className="uppercase leading-[1.05] text-4xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_0_0px_blue] break-words">
                    Bem-vindo á<br/> <span className="text-blue-400 font-capture">família Karkará</span>
                </h1>
                <p className="text-base sm:text-xl lg:text-2xl mt-4 max-w-[560px] mx-auto px-2">
                    Onde o fraco vira forte e o forte fica ainda mais perigoso
                </p>

                <div className="mt-8 flex flex-row items-center justify-center gap-2 sm:gap-4 w-full">
                    <button
                        type="button"
                        className="w-auto px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-blue-600 border border-blue-600 text-white text-[11px] sm:text-sm uppercase tracking-wide font-display transition-transform duration-300 hover:scale-[1.03]"
                    >
                        Conhecer a academia
                    </button>
                    <button
                        type="button"
                        className="w-auto px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-blue-600 text-blue-400 text-[11px] sm:text-sm uppercase tracking-wide font-display transition-transform duration-300 hover:scale-[1.03]"
                    >
                        Entrar no tatame
                    </button>
                </div>

                <div className="mt-10 sm:mt-16 flex justify-center">
                 <Mouse className="animate-bounce text-blue-400" />
                </div>
            </div>



            </div>
            <Faixa />
        </section>
    )
}
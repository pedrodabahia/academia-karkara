import FaixaDados from '../hooks/faixaDados'
import img from '/image/sobre.png'
import img2 from '/image/sobre2.png'
import { useState } from "react";

export default function About(){
     const [frente, setFrente] = useState(true);
    return(
        <section>
            <div className='text-white text-left px-4 sm:px-8 lg:px-10 py-20 sm:py-28 lg:py-32 about'>



                <div className="relative mx-auto mb-14 max-w-[900px] text-center sm:mb-20 lg:mb-22">
                    <div className="mb-6 inline-flex items-center gap-3.5 text-xs font-bold uppercase tracking-[0.32em] text-blue-400">
                    <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
                    Sobre
                    <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-transparent" />
                    </div>               
                </div>



                <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-16 max-w-[1200px] mx-auto">
                    <div className='w-full lg:w-[55%] texts'>
                    <h1 className='text-3xl sm:text-5xl lg:text-6xl font-capture text-blue-400'>Mais que uma academia</h1>
                    <h2 className='text-xl sm:text-2xl lg:text-3xl mt-2'>Uma família forjada na luta</h2>

                    <p className='mt-5 text-sm sm:text-base leading-relaxed text-[#c9c6bd]'>A Família Karkará nasceu da coragem de recomeçar e da paixão
                        pelas artes marciais. Fundada em 2015 pelo mestre <a className="text-blue-400" href='https://www.instagram.com/mariltondepaula/'>Marilton Karkará</a> no destrito de Posto da Mata - Bahia,
                        nossa equipe surgiu com a missão de formar muito mais do que atletas:
                        formar pessoas disciplinadas, confiantes e preparadas para vencer os
                        desafios dentro e fora do tatame. </p>

                    <p className='mt-4 text-sm sm:text-base leading-relaxed text-[#c9c6bd]'>Ao longo dessa trajetória, conquistamos títulos importantes e
                        levamos o nome da Karkará para grandes competições. Mas nossa
                        maior vitória continua sendo ver cada aluno evoluir como atleta e
                        como ser humano. Aqui, cada treino fortalece o corpo, a mente e
                        o caráter, porque acreditamos que o verdadeiro campeão é construído
                        todos os dias.
                        <span className='block mt-3 font-display uppercase tracking-wide text-blue-400 font-bold'>Treino duro. Luta fácil.</span></p>
                    </div>



    <div
      className="relative w-[220px] h-[280px] sm:w-[260px] sm:h-[340px] lg:w-[300px] lg:h-[400px] shrink-0"
        onMouseEnter={() => setFrente(false)}
        onMouseLeave={() => setFrente(true)}
        onTouchStart={() => setFrente(false)}
    >
      <img
        src={img}
        className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-all duration-1000
        ${
          frente
            ? "z-10 rotate-6 translate-x-0"
            : "z-0 -rotate-6 translate-x-6"
        }`}
      />

      <img
        src={img2}
        className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-all duration-1000
        ${
          frente
            ? "z-0 -rotate-6 translate-x-6"
            : "z-10 rotate-6 translate-x-0"
        }`}
      />
    </div>




                </div>
                
            </div>
            <div>
                <FaixaDados />
            </div>
        </section>
    )
}
import Cards from '../hooks/modalidadesCards'

export default function Modalidades(){
    return(
        <section className="px-4 sm:px-10 lg:px-20 py-20 sm:py-28 lg:py-32 bg-zinc-950">

            <div className="relative mx-auto mb-14 max-w-[900px] text-center sm:mb-20 lg:mb-22">
                <div className="mb-6 inline-flex items-center gap-3.5 text-xs font-bold uppercase tracking-[0.32em] text-blue-400">
                    <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
                    Modalidades
                    <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-transparent" />
                </div>
            </div>

            <div className='text-center w-full max-w-[700px] mx-auto mb-12 sm:mb-16 px-2'>
                <h1 className='text-3xl sm:text-5xl lg:text-6xl font-capture text-blue-400'>Seu próximo desafio começa aqui</h1>
                <p className='mt-4 text-base sm:text-xl font-light text-white'>Cada modalidade oferece um caminho diferente, mas todas levam ao mesmo destino: uma versão mais forte, disciplinada e confiante de você.</p>
            </div>

            <Cards />
        </section>
    )
}
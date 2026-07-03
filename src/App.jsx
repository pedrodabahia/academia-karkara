import React, { useState } from "react";
import Hero from "./components/homePages/hero"
import Loader from "./components/Loader";
import About from "./components/homePages/about";
import Modalidades from "./components/homePages/modalidade"
import FamiliaKarkaraSection from "./components/homePages/porqueNos";
import TestimonialsSection from "./components/homePages/depoimento";
import GallerySection from "./components/homePages/galery";
import CTAForte from "./components/homePages/ctaForte";
import Footer from "./components/homePages/footer";
import Localizacao from "./components/homePages/mapa";
import HallDaFama from "./components/homePages/campeoes";

/**
 * App.jsx (exemplo de integração)
 * --------------------------------
 * Demonstra o padrão de uso recomendado: o conteúdo do site já é montado
 * desde o início, por baixo do loader. Quando a faixa termina a saída,
 * o Loader se auto-oculta e a página já está lá, sem fade ou salto.
 */
export default function App() {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader && ( <Loader onComplete={() => {setLoading(false); setTimeout(() =>  setShowLoader(false), 1000)}} />)}

      <main className="site-content">
        <Hero />
        <About />
        <Modalidades />
        <HallDaFama />
        <FamiliaKarkaraSection />
        <TestimonialsSection />
        <GallerySection />
        <CTAForte />
        <Localizacao />
        <Footer />
      </main>
    </>
  );
}

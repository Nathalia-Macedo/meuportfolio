import JobMarketHero from "../Components/ConsultoriaExp/HeroExp";
import LearningPointsSection from "../Components/ConsultoriaExp/OqueVaiAprender";
import Footer from "../Components/Footer";
import {useEffect} from 'react'
function ConsultoriaMercado(){
    useEffect(() => {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100); // Pequeno atraso para evitar conflitos com animações
      }, []);
    return(
        <>
        <JobMarketHero/>
        <LearningPointsSection/>
        <Footer/>
        </>
    )
}
export default ConsultoriaMercado;
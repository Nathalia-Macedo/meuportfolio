import ConsultoriaHero from "../Components/InitConsultoria/HeroConsultoria";
import DiscoverySection from "../Components/InitConsultoria/Discovery";
import PricingSection from "../Components/InitConsultoria/CtaConsultoria";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
function ConsultoriaIniciantes(){
    return(
        <>
        <Header/>
        <ConsultoriaHero/>
        <DiscoverySection/>
        <PricingSection/>
        <Footer/>
        </>
    )
}

export default ConsultoriaIniciantes;
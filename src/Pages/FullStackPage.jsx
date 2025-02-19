import FullStackHero from "../Components/DFS/HeroSectionDFS";
import HowItWorks from "../Components/DFS/ComoTrabalho";
import PricingPlans from "../Components/DFS/PlansSection";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
function FullStackPage(){
    return(
        <>
        <Header/>
    <FullStackHero/>
    <HowItWorks/>
    <PricingPlans/>
    <Footer/>
    </>
    )
}

export default FullStackPage;
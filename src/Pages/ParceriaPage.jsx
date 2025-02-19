import PartnershipsHero from "../Components/Parcerias/HeroParceria";
import ServicesOffered from "../Components/Parcerias/ServicesParceria";
import PartnershipSection from "../Components/Parcerias/CTASectionParceria";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
function ParceriaPage(){
    return(
        <>
        <Header/>
        <PartnershipsHero/>
        <ServicesOffered/>
        <PartnershipSection/>
        <Footer/>
        </>
    )
}
export default ParceriaPage;
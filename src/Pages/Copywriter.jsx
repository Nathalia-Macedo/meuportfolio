import CopywritingHero from "../Components/Copywriter/HeroCopy";
import WhatICreate from "../Components/Copywriter/OQueEuFaco";
import SalesStrategies from "../Components/Copywriter/SalesStrategies";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
function CopywriterPage(){
    return(
        <>
        <Header/>
        <CopywritingHero/>
        <WhatICreate/>
        <SalesStrategies/>
        <Footer/>
        </>
    )
}

export default CopywriterPage
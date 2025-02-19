import TeachingHero from "../Components/AulasParticulares/Aulas"
import WhatYouWillLearn from "../Components/AulasParticulares/OqVaiAprender"
import OpportunitySection from "../Components/AulasParticulares/Oportunidades"
import PrivateLessonsPricing from "../Components/AulasParticulares/SectioPricing"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
function TelaAulas() {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <TeachingHero />
      <WhatYouWillLearn />
      <OpportunitySection />
      <PrivateLessonsPricing/>
      <Footer/>
    </div>
  )
}

export default TelaAulas


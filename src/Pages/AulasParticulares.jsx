import TeachingHero from "../Components/AulasParticulares/Aulas"
import WhatYouWillLearn from "../Components/AulasParticulares/OqVaiAprender"
import OpportunitySection from "../Components/AulasParticulares/Oportunidades"
import PrivateLessonsPricing from "../Components/AulasParticulares/SectioPricing"
function TelaAulas() {
  return (
    <div className="overflow-x-hidden">
      <TeachingHero />
      <WhatYouWillLearn />
      <OpportunitySection />
      <PrivateLessonsPricing/>
    </div>
  )
}

export default TelaAulas


import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom"
import Home from '../Pages/Home'
import TelaAulas from "../Pages/AulasParticulares"
import ConsultoriaIniciantes from "../Pages/ConsultoriaInicio"
import ScrollToTop from "../Components/ScrollToTop"
import ConsultoriaMercado from "../Pages/ExpConsultoria"
import CopywriterPage from "../Pages/Copywriter"
import ParceriaPage from "../Pages/ParceriaPage"
import SDRPage from "../Pages/SDRPage"
import FullStackPage from "../Pages/FullStackPage"
import NotFound from "../Pages/NotFoundPage"
import UnderConstruction from "../Components/EmConstrucao"
import Conteudos from "../Pages/ConteudoPage"
import FunnelContent from "../Components/Conteudos/Marketing/FunilVendas"
import RootLayout from "../Components/Conteudos/RootLayout"
import AppExplanation from "../Components/Conteudos/AppManagement"
import AffiliateMarketplace from "../Components/MarketPlace/Marketplace"
import SupermoduloCreativeCode from "../Components/SMs/Supermodulo"
import LandingPage from '../Components/SMs/Aula01CCUXUI'
import Aula2 from "../Components/SMs/Aula02/CreativeCodeUXUI2"
import WorkshopsExplicacao from "../Components/Workshops/WorkshopExplicacao"
import WorkshopGestaoEquipes from "../Components/Workshops/WorkshopGestaoDePessoas"
function App() {
  return (
    <Router>
       <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aulas" element={<TelaAulas />} />
        <Route path="/consultoria" element={<ConsultoriaIniciantes/>}/>
        <Route path="/consultoria-mercado" element={<ConsultoriaMercado/>}/>
        <Route path="/copywriter" element={<CopywriterPage/>}/>
        <Route path="/parceria" element={<ParceriaPage/>}/>
        <Route path="/sdr" element={<SDRPage/>}/>
        <Route path="/desenvolvimento" element={<FullStackPage/>}/>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/conteudos" element={<UnderConstruction />} />
        <Route path="/content" element={<Conteudos/>} />
        <Route path="/funil" element={<FunnelContent/>} />
        <Route path="/content/:id" element={<RootLayout />} />
        <Route path="/app" element={<AppExplanation />} />
        <Route path="/produtos" element={<AffiliateMarketplace />} />
        <Route path="/supermodulos" element={<SupermoduloCreativeCode />} />
        <Route path="/aula01" element={<LandingPage />} />
        <Route path="/aula02" element={<Aula2 />} />
        <Route path="/workshops" element={<WorkshopsExplicacao />} />
      <Route path="/workshop-gestao-equipes" element={<WorkshopGestaoEquipes/>}/>



      </Routes>
    </Router>
  )
}

export default App


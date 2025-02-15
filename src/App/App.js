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

      </Routes>
    </Router>
  )
}

export default App


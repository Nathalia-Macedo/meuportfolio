import Header from "../Header"
import Footer from "../Footer"
import { useLocation } from 'react-router-dom'
import FunnelContent from "./Marketing/FunilVendas"
export default function RootLayout({ children }) {
    const location = useLocation()
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {location.pathname === '/funil-de-vendas' ? <FunnelContent /> : children}
        <Footer />
      </body>
    </html>
  )
}
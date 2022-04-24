
import { Header } from "./components/Header"
import { QuemSomos } from "./components/SectionQuemSomos"
import { ServicosFinanceiros } from "./components/SectionServicosFinanceiros"
import { Footer } from "./components/Footer"
import { GlobalStyle } from "./styles/global"
import { FaleConosco } from "./components/SectionFaleConosco"
import { Blog } from "./components/SectionsBlog"
import { Parceiros } from "./components/SectionParceiros"


function App() {

  return (
    <>
      <Header/>
      <main>        
        <QuemSomos/>
        <ServicosFinanceiros/>
        <Parceiros/>
        <Blog/>
        <FaleConosco/>
      </main>
      <Footer/>
      <GlobalStyle/>
    </>
  )
}

export default App

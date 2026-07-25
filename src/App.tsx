import Contato from "./sections/Contato"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Inicio from "./sections/Inicio"
import Projetos from "./sections/Projetos"
import Sobre from "./sections/Sobre"

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main>
        <Inicio />
        <Sobre />
        <Projetos />
        <Contato />
      </main>

      <Footer />
    </div>
  )
}

export default App

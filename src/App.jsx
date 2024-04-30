import Navbar from './componentes/section/Navbar.jsx'
import Hero from './componentes/section/Hero.jsx'
import Projects from './componentes/section/Projects.jsx'
import About from './componentes/section/About.jsx'
import Footer from './componentes/section/Footer.jsx'
import './App.css'

function App() {

  return (
    <div>
      <Navbar /> {/* front end completo, faltando as funcionalidades de endereçamento (retirar elemento não exibido no site)*/}
      <Hero /> {/* Componente completo (precisando apenas alterar o conteudo*/}
      <Projects /> {/* Componente completo (precisando apenas alterar o conteudo e sinto que tem que ter uma refinada no css) */}
      <About />
      <Footer />
    </div>
  )
}

export default App


import { Header } from './components/Hader'
import './App.css'
import { Contador } from './components/Contador'
import { Lista } from './components/Lista'
import { Footer } from './components/Footer'
import { Banner } from './components/Banner'

function App() {

  return (
    <>
      <Header title="Projeto React" subTitulo="React" />

      <main className="container">

        <h1 className='titulo'>Conteudo do Projeto React</h1>

        <div className='link'>
          <a href="#">Vai para Contato</a>
        </div>

        <Contador />

        <Lista />

        <Banner />

      </main>

      <Footer />

    </>
  )
}

export default App

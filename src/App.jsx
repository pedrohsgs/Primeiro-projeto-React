
import { Header } from './components/Hader'
import './App.css'
import { Contador } from './components/Contador'
import { Lista } from './components/Lista'

function App() {

  return (  
    <>
      <Header title="Projeto React" subTitulo="React" />

      <main className="container">

        <h1 className='titulo'>Conteudo do Projeto React</h1>

        <div className='link'>
          <a href="#">Vai para Contato</a>
        </div>

        <Contador/>

        <Lista/>

      </main>
    </>
  )
}

export default App

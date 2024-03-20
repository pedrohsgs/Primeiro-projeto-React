import './App.css'
import { Footer } from './components/Footer'
import Router from './router'
import { Header } from './components/Hader'

function App() {

  return (
    <>
      <Header title="Projeto React" subTitulo="React" />

      <Router />

      <Footer />


    </>
  )
}

export default App

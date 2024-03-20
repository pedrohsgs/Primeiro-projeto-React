import { Link } from "react-router-dom";
import { CadastroNews } from "../components/CadastroNews";
import { Contador } from "../components/Contador";
import { Lista } from "../components/Lista";

export function Home() {
    return (
        <main className="container">

            <h1 className='titulo'>Conteudo do Projeto React</h1>

            <div className='link'>
                <a href="#">Vai para Contato</a>
                <Link to="/Contato">Vai Para Contato</Link>
            </div>

            <Contador />

            <Lista />

            <CadastroNews />

        </main>
    )
}
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Contato() {

    //useState do React para gerenciar o estado dos usuarios
    const [usuarios, setUsuarios] = useState([]);

    //Hook useEffect para lidar com efeitos colaterais no components
    useEffect(() =>{
        fetch("http://localhost:7000/news")
         .then((response) => response.json())
         .then((data) => setUsuarios(data))
    }, []);

    console.log(usuarios)
    
    return (

        <div className="contato">
            <h1>Contato</h1>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                {usuarios.map((user) => (
                    <div>
                        <strong>Nome: {user.name}</strong> <br />
                        <strong>E-mail: {user.email}</strong> <br />
                        <strong>Telefone: {user.telefone}</strong>
                        <hr />
                    </div>
                ))}
            </div>
        </div>

    )
}
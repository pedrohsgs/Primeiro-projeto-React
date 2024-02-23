
import { useState } from "react";
import "./style.css";

export function Contador(){

    const [Contador, setContador] = useState(0);

    const clickIncrement = () =>{
        setContador(Contador + 1);
    }

    const clickDecrement = () =>{
        setContador(Contador - 1);
    }

    return (
        <div className="contador">

            <h1>Contador</h1>

            <section className="buttons">
                <button onClick={clickIncrement}>Increment</button>
                <button onClick={clickDecrement}>Decrement</button>
            </section>

            <section className="result">
                <strong>{Contador}</strong>
            </section>


        </div>
    )
}
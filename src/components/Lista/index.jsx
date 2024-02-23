import "./style.css";
    
    export const Lista = () => {
        return (
            <main>

                <section className="img-nj">

                    <h1>Lista</h1>

                    <img src="https://pbs.twimg.com/media/GCtMFcYW0AAKvjG?format=jpg&name=large" alt="imagem" />

                    <p>
                        neymarjr
                    </p>

                </section>

                <section className="lista">

                    <h1>
                        Lista Nomes
                    </h1>

                    <div>
                        <strong> Nome: </strong> <span>Pedro Gonçalves</span><br />
                        <strong>Responsavel: </strong> <span>Lorem Ipsum</span><br />
                        <strong>Valor: </strong><span>R$ 100,00</span><br />    

                    </div>
                </section>
                
            
            </main >
        )
    }
import "./style.css";

export const Lista = () => {

    const lista = [

        {
            nome: "Neymar",
            responsavel: "Al-Hillaw",
            valor: "R$ 320.00",

        },

        {
            nome: "Neymar",
            responsavel: "Al-Hillaw",
            valor: "R$ 320.00",

        },

        {
            nome: "Neymar",
            responsavel: "Al-Hillaw",
            valor: "R$ 320.00",

        },

        {
            nome: "Neymar",
            responsavel: "Al-Hillaw",
            valor: "R$ 320.00",

        }
    ]

    return (
        <main>

            <section className="img-nj">

                <h1>Lista</h1>

                <img src="https://pbs.twimg.com/media/GCtMFcYW0AAKvjG?format=jpg&name=large" alt="imagem" className="img1" />

                <p>
                    neymarjr
                </p>

            </section>

            <section className="lista">

                <h1>
                    Descrição
                </h1>

                <article className="content-listagem">
                    {lista.map((item, index) => {
                        return(

                        <div key={index} className="listagem">
                            <strong>Nome: </strong> <span>{item.nome}</span><br />
                            <strong>Responsavel: </strong> <span>{item.responsavel}</span><br />
                            <strong>Valor: </strong><span>{item.valor}</span><br />

                        </div>

                        )

                    })}

                </article>

            </section>


        </main >
    )
}
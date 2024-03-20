import "./style.css";

export const Lista = () => {

    const lista = [

        {
            nome: "Neymar Jr",
            responsavel: "Al-Hillaw",
            valor: "R$ 320.00",

        },

        {
            nome: "Cristiano Ronaldo",
            responsavel: "Al-Nassar",
            valor: "R$ 350.00",

        },

        {
            nome: "Lionel Messi",
            responsavel: "Inter Miami",
            valor: "R$ 290.00",

        },

    ]

    return (
        <main >

            <section className="list">

                <section className="img-nj">

                    <div className="box">

                        <h1>Neymar Jr</h1>

                        <img src="public/imageNJ.png" alt="imagem" className="img1" />

                    </div>

                    <div className="box">

                        <h1>Cristiano Ronaldo</h1>
                        
                        <img src="public/imageCR.png" alt="imagem" className="img1" />

                    </div>

                    <div className="box">

                        <h1>Lionel Messi</h1>
                        
                        <img src="public/imageMS.png" alt="imagem" className="img1" />

                    </div>







                </section>

                <section className="lista">

                    <h1>
                        Descrição
                    </h1>

                    <article className="content-listagem">
                        {lista.map((item, index) => {
                            return (

                                <div key={index} className="listagem">
                                    <strong>Nome: </strong> <span>{item.nome}</span><br />
                                    <strong>Responsavel: </strong> <span>{item.responsavel}</span><br />
                                    <strong>Valor: </strong><span>{item.valor}</span><br />

                                </div>

                            )

                        })}

                    </article>

                </section>

            </section>

        </main >
    )
}
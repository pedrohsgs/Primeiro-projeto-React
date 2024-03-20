import {useState} from "react";
import './index.css';
 
export function CadastroNews(){
   //Estado inicial do formulario
   const initilform = {
      nome: "",
      email:"",
      telefone: "",
      endereco: ""
   }
   
   //Estado do formulario (get, set)
   const [formState, setFormState] = useState(initilform);
   
   //funçao para lidar com a alteraçao de campos de entrada
   const handleInput = (event) => {
      // obter o elemento da entrada  atual
      const target = event.currentTarget;
 
      //Extrair o valor e o nome do campo de entrada
      const { value, name } = target;
 
      //atualizar o estado do formulario com os novos valores
      setFormState({ ...formState, [name]: value});
   };
 
   const exemploTarget = (event) => {
      console.log("Elemento Clicado: ", event.target);
      console.log("Elemento Atual: ", event.currentTarget);
   }
 
   //Função para lidar com a submissão do formulário
   const handleSubmit = (event) => {
      event.preventDefault();
     
       if(validacao.value == ""){
         alert('Preencha todos os campos')
         console.log(formState)
       }else{
         const formGeneral = {
            nome: formState.nome,
            email: formState.email,
            telefone: formState.telefone,
            endereco: formState.endereco,
            createdAt: new Date(),
         }
 
         console.log('teste')
     
          const requestOptions = {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(formGeneral),
          }
 
          // Limpar os dados do formulário
 
            setFormState({...initilform})
 
            console.log(formState);
 
            fetch("http://localhost:7000/news", requestOptions)
            .then((response) => response.json())
            .then((data) => setFormState(data))
            }
       }
 
       
    return(
       <section className="formClass">
 
          <div className="formMain">
              <form className="formP" onSubmit={handleSubmit}>
                <div className="form-control">
                   <label htmlFor="nome">Nome: </label>
                   <input
                    required
                    type="text"
                    name="nome"
                    id="nome"
                    value={formState.nome}
                    placeholder="Digite seu nome"
                    onChange={handleInput}
                    />
                </div>
                <div className="form-control">
                   <label htmlFor="email">Email: </label>
                   <input
                    required
                    type="text"
                    name="email"
                    id="email"
                    value={formState.email}
                    placeholder="Digite seu Email"
                    onChange={handleInput}
                    />
                </div>
                <div className="form-control">
                   <label htmlFor="telefone">Telefone: </label>
                   <input
                   required
                    type="text"
                    name="telefone"
                    id="telefone"
                    value={formState.telefone}
                    placeholder="Digite seu Telefone"
                    onChange={handleInput}
                    />
                </div>
                <div className="form-control">
                   <label htmlFor="endereco">Endereço: </label>
                   <input
                   
                    type="text"
                    name="endereco"
                    id="endereco"
                    value={formState.endereco}
                    onChange={handleInput}
                    placeholder="Digite seu Endereço"
                    />
                </div>
 
                <div className="buttonSubmit">
                  <button>Enviar</button>
                </div>
              </form>
 
          </div>
       </section>
    );
}

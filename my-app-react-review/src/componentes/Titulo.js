import Texto from "./Texto.js";
export default function Titulo(){
    return(
        <div className="Titulo">

            <p><Texto/></p>
            <h2>Componente utilizado para criar um titulo para o projeto</h2>
            
            <p><Texto/></p>
            <h2>Chamando abaixo novamente o mesmo componenet.</h2>

            <p><Texto/></p>   
        </div>
    )
}
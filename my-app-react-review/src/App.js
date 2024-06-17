import Titulo from "./componentes/Titulo";
export default function App(){
  function Carro(){
    return <h3>E eu sou um carro!</h3>
  }
  function Caminhao(){
    return <h3>E eu sou um caminhão!</h3>
  }
  return(
    <div className="App">
      <Caminhao/>
      <Carro/>
      <Titulo/>
    </div>
  )
}
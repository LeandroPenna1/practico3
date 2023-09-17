import './App.css';
import Ingreso from './componentes/Ingreso';
import { useState } from 'react';
import Opciones from './componentes/Opciones';
import Marcador from './componentes/Marcador';
import Resultado from './componentes/Resultado';

function App() {
  const [nombre, setNombre] = useState("");
  const NuevoNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };
  const [puntajeComputadora, setPuntajeComputadora] = useState(0);
  const [puntajeUsuario, setPuntajeUsuario] = useState(0);
  const [resultado, setResultado] = useState("");
  const [opcionUsuario, setOpcionUsuario] = useState("");
  const [opcionComputadora, setOpcionComputadora] = useState("");
  const determinarGanador = (opcionUsuario, opcionComputadora) => {
    if (opcionComputadora === opcionUsuario) {
      setResultado("empate");
    } else if (
      (opcionUsuario === "piedra" && opcionComputadora === "tijera") ||
      (opcionUsuario === "tijera" && opcionComputadora === "papel") ||
      (opcionUsuario === "papel" && opcionComputadora === "piedra")
    ){ 
      setResultado("ganaste");
      setPuntajeUsuario(puntajeUsuario + 1);
    } else {
      setResultado("perdiste");
      setPuntajeComputadora(puntajeComputadora + 1);
    }
  };

  return (
    <div className='App'>
     <header className='App-header'>
       <h1>BIENVENIDOS AL PIEDRA, PAPEL O TIJERA</h1>
       <Ingreso nombre={nombre} SetNombre={NuevoNombre} />
       <br/>
       
       <Opciones jugada={(opcionUsuario, opcionComputadora) =>{
        setOpcionUsuario(opcionUsuario);
        setOpcionComputadora(opcionComputadora);
        determinarGanador(opcionUsuario, opcionComputadora);
        }}/>
       <Marcador puntajeUsuario={puntajeUsuario} puntajeComputadora={puntajeComputadora}/>
       <div className='resultado'>
        <p>Tu elección: {opcionUsuario || "Haz tu elección"} </p>
        <p>Elección PC: {opcionComputadora || "Esperando"} </p>
        <p>Resultado: {resultado || "Esperando jugadas"} </p>
       </div>
     </header>
    </div>
  );
}

export default App;
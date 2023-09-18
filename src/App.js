import './App.css';
import Ingreso from './componentes/Ingreso';
import { useState } from 'react';
//Opté por usar el siguiente hook, para evitar problemas de renderizado que sucedían cuando se activaba "juegoTerminado".
import { useEffect } from 'react';
import Opciones from './componentes/Opciones';
import Marcador from './componentes/Marcador';
import Interfaz from './componentes/Interfaz';
import ResultadoFinal from './componentes/ResultadoFinal';
import { Boton } from './componentes/Boton.jsx';

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
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const puntajeMaximo = 3;
  const reiniciarJuego = () => {
    setPuntajeComputadora(0);
    setPuntajeUsuario(0);
    setResultado("");
    setOpcionUsuario("");
    setOpcionComputadora("");
  };
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
  let resultadoFinal = null;
  if (puntajeUsuario === puntajeMaximo) {
    resultadoFinal = "HAS GANADO AL MEJOR DE 5"; 
  } else if(puntajeComputadora === puntajeMaximo){
    resultadoFinal = "LA PC HA GANADO AL MEJOR DE 5";
  };
  
  useEffect(() => {
    if (puntajeComputadora === puntajeMaximo || puntajeUsuario === puntajeMaximo) {
      setJuegoTerminado(true);
    }
  }, [puntajeComputadora, puntajeUsuario]);

  return (
    <div className='App'>
     <header className='App-header'>
       <Ingreso nombre={nombre} SetNombre={NuevoNombre} />
       <Opciones jugada={(opcionUsuario, opcionComputadora) =>{
        setOpcionUsuario(opcionUsuario);
        setOpcionComputadora(opcionComputadora);
        determinarGanador(opcionUsuario, opcionComputadora);
        }}/>
       <Interfaz nombre={nombre} opcionComputadora={opcionComputadora} opcionUsuario={opcionUsuario}/>
       <Marcador nombre={nombre} puntajeUsuario={puntajeUsuario} puntajeComputadora={puntajeComputadora}/>
       <ResultadoFinal resultado={resultado} resultadoFinal={resultadoFinal} />
       <div>
        {juegoTerminado && <Boton className='reinicio' onClick={reiniciarJuego}>Reiniciar Juego</Boton>}
       </div>
     </header>
    </div>
  );
}
export default App;
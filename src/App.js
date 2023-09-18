/* IMPORTS: */
import './App.css';
import Ingreso from './componentes/Ingreso';
import { useState } from 'react';
//Opté por importar y usar el siguiente hook, para evitar problemas de renderizado que sucedían cuando se activaba "juegoTerminado".
import { useEffect } from 'react';
import Opciones from './componentes/Opciones';
import Marcador from './componentes/Marcador';
import Interfaz from './componentes/Interfaz';
import ResultadoFinal from './componentes/ResultadoFinal';
import { Boton } from './componentes/Boton.jsx';
/* Función padre */
function App() {
  /* Usaremos mucho el hook useState para gestionar valores que cambiarán con el correr del juego */
   /* Funcion: actualizar nombre */
  const [nombre, setNombre] = useState("");
  const NuevoNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };
  /* Se crea un estado que representa el puntaje de la PC y Usuario */
  const [puntajeComputadora, setPuntajeComputadora] = useState(0);
  const [puntajeUsuario, setPuntajeUsuario] = useState(0);
  /* Almacenar el resultado de cada ronda del juego: */
  const [resultado, setResultado] = useState("");
  /* Registro de elecciones: */
  const [opcionUsuario, setOpcionUsuario] = useState("");
  const [opcionComputadora, setOpcionComputadora] = useState("");
  /* Indica si ha llegado a su fin el juego: */
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  /* Se establece el puntaje máximo de la ronda general */
  const puntajeMaximo = 3;
  /* Función para reiniciar todos los estados: */
  const reiniciarJuego = () => {
    setPuntajeComputadora(0);
    setPuntajeUsuario(0);
    setResultado("");
    setOpcionUsuario("");
    setOpcionComputadora("");
  };
  /* Se compara las elecciones del usuario y la computadora para determinar el resultado de la ronda y actualizar los puntajes y resultados. */
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
  /* Se verifica si el puntaje del usuario alcanza el puntaje máximo y se asigna un resultado final en consecuencia */
  if (puntajeUsuario === puntajeMaximo) {
    resultadoFinal = "HAS GANADO AL MEJOR DE 5"; 
  } else if(puntajeComputadora === puntajeMaximo){
    resultadoFinal = "LA PC HA GANADO AL MEJOR DE 5";
  };
  /* Se utiliza el hook "useEffect" para controlar el estado de "juegoTerminado" basado en los puntajes actuales. */
  useEffect(() => {
    if (puntajeComputadora === puntajeMaximo || puntajeUsuario === puntajeMaximo) {
      setJuegoTerminado(true);
    }
  }, [puntajeComputadora, puntajeUsuario]);

  return (
    <div className='App'>
     <header className='App-header'>
     {/* Ingresamos los componentes antes creados con sus props */}
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
import './App.css';
import Ingreso from './componentes/Ingreso';
import { useState } from 'react';
import Opciones from './componentes/Opciones';

function App() {
  const [nombre, setNombre] = useState("");
  const NuevoNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };
  const [opcionUsuario, setOpcionUsuario] = useState("");
  const [opcionComputadora, setOpcionComputadora] = useState("");
  //const de resultado, luego la logica del resultado

  return (
    <div className='App'>
     <header className='App-header'>
       <h1>BIENVENIDOS AL PIEDRA, PAPEL O TIJERA</h1>
       <Ingreso nombre={nombre} SetNombre={NuevoNombre} />
       <br/>
       
       <Opciones jugada={(opcionUsuario, opcionComputadora) =>{
        setOpcionUsuario(opcionUsuario);
        setOpcionComputadora(opcionComputadora);
        }}/>
     </header>
    </div>
  );
}

export default App;
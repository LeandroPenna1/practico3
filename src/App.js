import './App.css';
import Ingreso from './componentes/Ingreso';
import { useState } from 'react';
import Interfaz from './componentes/Interfaz';
import Marcador from './componentes/Marcador';
import Resultado from './componentes/Resultado';

function App() {
  const [nombre, setNombre] = useState("");
  const NuevoNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };

  return (
    <div className='App'>
     <header className='App-header'>
       <h1>BIENVENIDOS AL PIEDRA, PAPEL O TIJERA</h1>
       <Ingreso nombre={nombre} SetNombre={NuevoNombre} />
       <br/>
     </header>
    </div>
  );
}

export default App;
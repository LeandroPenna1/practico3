import React, { useState } from 'react';
import { Boton } from './Boton.jsx';

function Ingreso(props) {

    const { nombre, SetNombre } = props;
  const [nombreNuevo, setNombreNuevo] = useState(""); // Estado para el nuevo nombre

  const NuevoNombre = (e) => {
    setNombreNuevo(e.target.value);
  };

  const CambiarNombre = () => {
    SetNombre(nombreNuevo);
  };

return(
    <div>
        <div className='Bienvenida'>
          <h1>BIENVENIDO AL PIEDRA, PAPEL O TIJERA</h1>
          <h2>Bienvenido al mejor juego del mundo, {nombre || "invitado"}!</h2>
        </div>
        <div className='ingreso'>
        <input
        placeholder='Ingrese su nombre'
        type='text'
        value={nombreNuevo}
        onChange={NuevoNombre}
        />
        <Boton
        onClick={CambiarNombre}
        >Enviar</Boton>
        </div>
    </div>
)
}

export default Ingreso;
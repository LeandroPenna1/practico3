import React, { useState } from 'react';
import { Boton } from './Boton.jsx';
/* Importamos React y el componente boton */
function Ingreso(props) {
/* Con esta función manejaremos la entrada del usuario.
Nombre nuevo rastrea el nombre ingresado */
  const { nombre, SetNombre } = props;
  const [nombreNuevo, setNombreNuevo] = useState(""); // Estado para el nuevo nombre

/* Las funciones CambiarNombre y NuevoNombre actualizan el mismo */
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
        {/* Implementamos un input para que el usuario pueda ingresar su nombre */}
        <input
        placeholder='Ingrese su nombre' 
        type='text'
        value={nombreNuevo}
        onChange={NuevoNombre}
        /> {/* Value: vinculado al nuevo valor. OnChange ejecutara la función NuevoNombre  */}
        {/* Mediante el boton que creamos con Styled components, lo usamos como componente */}
        <Boton 
        onClick={CambiarNombre}
        >Enviar</Boton>
        </div>
    </div>
)
}

export default Ingreso;
import React, { useState } from 'react';

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
        <h1>
            Bienvenido al mejor juego, {nombre || "invitado"}!
        </h1>
        <input
        placeholder='Ingrese su nombre'
        type='text'
        value={nombreNuevo}
        onChange={NuevoNombre}
        />
        <button
        onClick={CambiarNombre}
        >Enviar</button>
    </div>
)
}

export default Ingreso;
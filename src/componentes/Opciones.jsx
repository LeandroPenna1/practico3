import React from "react";
import { useState } from 'react';

function Opciones({jugada}) {
  const opciones = ["piedra", "papel", "tijera"];
  const [opcionUsuario, setOpcionUsuario] = useState(null);
  const jugar = (opcionSeleccionada) => {
    const opcionComputadora = opciones[Math.floor(Math.random() * 3)];
    setOpcionUsuario(opcionSeleccionada);
    jugada(opcionSeleccionada, opcionComputadora);
  };

  return (
    <div className="opciones">
      {opciones.map((opcionUsuario, index) => (
        <button key={index} onClick={() => jugar(opcionUsuario)}>
          {opcionUsuario}
        </button>
      ))}
    </div>
  );
};

export default Opciones;
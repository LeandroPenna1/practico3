import React from "react";
import papel from "../imagenes/papel.png";
import piedra from "../imagenes/piedra.png";
import tijera from "../imagenes/tijera.png";
import { useState } from 'react';

function Opciones({jugada}) {
  const opciones = ["piedra", "papel", "tijera"];
  const [opcionUsuario, setOpcionUsuario] = useState(null);
  const jugar = (opcionSeleccionada) => {
    /* Se genera aleatoriamente la jugada de la pc */
    const opcionComputadora = opciones[Math.floor(Math.random() * 3)];
    /* Se actualiza la opcion del usuario y se llama a la funcion jugar */
    setOpcionUsuario(opcionSeleccionada);
    jugada(opcionSeleccionada, opcionComputadora);
  };

  return (
    <div className="opciones">
    <h3>Opciones</h3>
    <div className="imagenes">
    {/* Mediante el click en las imagenes, se llama a la funcion jugar con la elección propia de su imagen */}
    <img src={piedra} id="piedra" onClick={() => jugar("piedra")}/>
    <img src={papel} id="papel" onClick={() => jugar("papel")} />
    <img src={tijera} id="tijera" onClick={() => jugar("tijera")} />
    </div>
    </div>
  );
};

export default Opciones;
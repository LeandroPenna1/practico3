import React from "react";

function Marcador({nombre, puntajeUsuario, puntajeComputadora}) {
  return(
    <div className="marcador">
    <h3>Marcador</h3>
    <p>Puntaje {nombre || "Invitado"}: {puntajeUsuario}</p>
    <p>Puntaje Computadora: {puntajeComputadora} </p>
    </div>)
}

export default Marcador;
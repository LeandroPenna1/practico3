import React from "react";

function Interfaz({nombre, opcionComputadora, opcionUsuario}) {
    return(
    <div className="Interfaz">
    <h3>Elecciones</h3>
    <p>Elección {nombre || "invitado"}: {opcionUsuario || "Haz tu elección"} </p>
    <p>Elección computadora: {opcionComputadora || "Esperando"} </p>
    </div>)
}

export default Interfaz;
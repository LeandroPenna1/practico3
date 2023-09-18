import React, { useState } from "react";
/* Se mostrará el resultado de la ronda y el resultado final */
function ResultadoFinal({resultado, resultadoFinal}) {
  return(
    <div className="Resultado">
    <h3> Resultados </h3>
    <p>Resultado de la ronda: {resultado || "Esperando jugadas"}</p>
    <p>{resultadoFinal} </p>
    </div>
  )
}

export default ResultadoFinal;
import React, { useState } from "react";

function ResultadoFinal({resultado, resultadoFinal}) {
  return(
    <div className="ResultadoFinal">
    <h3> Resultados </h3>
    <p>Resultado de la ronda: {resultado || "Esperando jugadas"}</p>
    <p>{resultadoFinal} </p>
    </div>
  )
}

export default ResultadoFinal;
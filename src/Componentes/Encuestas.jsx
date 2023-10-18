import React from 'react';

function Encuestas({ encuestas }) {
  return (
    <div>
      {encuestas.map((encuesta) => (
        <div key={encuesta.id}>
          <h2>{encuesta.pregunta}</h2>
          <ul>
            {encuesta.opciones.map((opcion, index) => (
              <li key={index}>{opcion}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Encuestas; 
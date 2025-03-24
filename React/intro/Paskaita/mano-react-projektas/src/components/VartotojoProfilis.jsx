import React from "react";

function VartotojoProfilis({ vardas, amzius, spalva }) {
  return (
    <div>
      <h3>Vartotojo vardas: {vardas}</h3>
      <p>Amžius: {amzius}</p>
      <p>Mėgstama spalva: {spalva}</p>
    </div>
  );
}

export default VartotojoProfilis;


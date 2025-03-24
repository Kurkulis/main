import React from "react";

function ProduktoKortele({ pavadinimas, kaina, aprasymas }) {
  return (
    <div className="produkto-kortele">
      <h3>Produkto pavadinimas: {pavadinimas}</h3>
      <p>Produkto kaina: {kaina}</p>
      <p>Produkto aprašymas: {aprasymas}</p>
    </div>
  );
}

export default ProduktoKortele;

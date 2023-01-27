import React from "react";

function Ruleta({ num }) {
  return (
    <>
      <div className="ruleta">
        <div className="numeroRuleta">{num}</div>
      </div>
      <h2>El numero ganador es: {num}</h2>
    </>
  );
}

export default Ruleta;

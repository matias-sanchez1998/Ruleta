import React from 'react'

function Inputs({dineroGanado,setnumeroJugador,setdineroApostado,dineroApostado,numeroJugador}) {
  return (
<React.Fragment>
<h3>Dinero ganado: ${dineroGanado}</h3>
      <label>
        Ingresa tu numero
        <input
          type="number"
          value={numeroJugador}
          placeholder="Coloca tu numero"
          onChange={(e) => setnumeroJugador(e.target.value)}
        />
      </label>
      <label>
        Cuanto dinero vas a apostar?
        <input
          type="number"
          value={dineroApostado}
          placeholder="Coloca tu numero"
          onChange={(e) => setdineroApostado(e.target.value)}
        />
      </label>
</React.Fragment>  )
}

export default Inputs
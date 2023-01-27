import React from 'react'

function Button({game,numeroJugador,dineroApostado,gameX100}) {
  return (
    <div className="buttonRuleta">
        <button onClick={() => game(numeroJugador, dineroApostado)}>
          Simula una jugada
        </button>
        <button onClick={() => gameX100(numeroJugador, dineroApostado)}>
          Simula una jugada X100
        </button>
      </div>
  )
}

export default Button
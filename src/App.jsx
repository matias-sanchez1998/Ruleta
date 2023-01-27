import React, { useState, useContext } from "react";
import "./App.css";
import Ruleta from "./components/Ruleta";
import { contexto, Provider } from "./Context";
import Inputs from "./components/Inputs";
import Button from "./components/Button";

function App() {
  const {
    numeroJugador,
    numeroGanador,
    setnumeroJugador,
    setdineroApostado,
    game,
    gameX100,
    dineroApostado,
    dineroGanado,
  } = React.useContext(contexto);
  return (
    <Provider>
      <Ruleta num={numeroGanador}></Ruleta>

      <Inputs
        dineroGanado={dineroGanado}
        setnumeroJugador={setnumeroJugador}
        setdineroApostado={setdineroApostado}
        dineroApostado={dineroApostado}
        numeroJugador={numeroJugador}
      />
      <Button
        game={game}
        numeroJugador={numeroJugador}
        dineroApostado={dineroApostado}
        gameX100={gameX100}
      />
    </Provider>
  );
}

export default App;

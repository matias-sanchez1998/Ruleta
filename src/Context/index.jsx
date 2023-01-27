import React, { useState } from "react";

const contexto = React.createContext();

const Provider = (props) => {
  const [numeroJugador, setnumeroJugador] = useState("");
  const [numeroGanador, setnumeroGanador] = useState("");
  const [dineroGanado, setdineroGanado] = useState(0);
  const [dineroApostado, setdineroApostado] = useState(0);

  const game = (num, din) => {
    const number = Math.floor(Math.random() * 37);
    setnumeroGanador(number);
    if (num < 0 || num > 36) alert("El numero para jugador debe ser otro");

    if (num == "") alert("Ingresa un numero para jugar");

    if (num == number) {
      setdineroGanado(dineroGanado + din * 36);
    } else {
      setdineroGanado(dineroGanado - din);
    }
  };

  const gameX100 = (num, din) => {
    if (num < 0 || num > 36) alert("El numero para jugador debe ser otro");

    if (num == "") alert("Ingresa un numero para jugar");
    let numerosGanadores = Array.from({ length: 100 }, () =>
      Math.floor(Math.random() * 37)
    );
    let money = dineroGanado;
    numerosGanadores.map((item) => {
      setnumeroGanador(item);
      if (num == item) {
        money = money + din * 36;

        console.log(item, "item");
      } else {
        setdineroGanado(dineroGanado - din);
        money = money - din;
      }
    });
    setdineroGanado(money);
  };

  return (
    <contexto.Provider
      value={{
        numeroJugador,
        setnumeroJugador,
        numeroGanador,
        setnumeroGanador,
        dineroGanado,
        setdineroGanado,
        dineroApostado,
        setdineroApostado,
        game,
        gameX100,
      }}
    >
      {props.children}
    </contexto.Provider>
  );
};

export { contexto, Provider };

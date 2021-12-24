import React from "react";
import DateTime from "../../helpers/Date";

let Header = ({
  initialState,
  from,
  to,
  country,
  price,
  size,
  toggleModeDark,
  isDark,
}) => {
  const namePrice = (pri) => {
    if (+pri === 1) {
      return "Barato";
    } else if (+pri === 2) {
      return "SemiBarato";
    } else if (+pri === 3) {
      return "Mediano";
    } else if (+pri === 4) {
      return "Lujoso";
    }
  };

  return (
    <div className="first__information">
      <div className="btn_mode">
        <button onClick={toggleModeDark}>{`Modo ${
          isDark ? "Light" : "Dark"
        }`}</button>
      </div>
      <div className="box__information">
        <span>
          <h1>Hoteles</h1>
        </span>
        <h2>
          {from !== initialState.from ? `Desde el ${DateTime(from)}` : from}
          {to !== "" ? `, Hasta el ${DateTime(to)}` : to}
        </h2>
        <h2>{country !== initialState.country ? `En ${country}` : country}.</h2>
        <h2>
          {price !== initialState.price
            ? `De precio ${namePrice(price)}`
            : price}
          .
        </h2>
        <h2>{size !== initialState.size ? `Tamaño ${size}` : size}.</h2>
      </div>
    </div>
  );
};

export default Header;

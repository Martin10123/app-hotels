import React from "react";
import "./Styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

let Filtros = ({
  initialState,
  resetBoton,
  from,
  to,
  country,
  price,
  size,
  changeInputsValues,
}) => {
  return (
    <form>
      <div className="box__inputs">
        <input
          type="date"
          name="from"
          value={from}
          id="from__hotel"
          onChange={changeInputsValues}
        />
        <input
          type="date"
          name="to"
          id="to__hotel"
          value={to}
          onChange={changeInputsValues}
        />

        <select name="country" value={country} onChange={changeInputsValues}>
          <option value={initialState.country}>{initialState.country}</option>
          <option value="Argentina">Argentina</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Brasil">Brasil</option>
          <option value="Chile">Chile</option>
        </select>

        <select name="price" value={price} onChange={changeInputsValues}>
          <option value={initialState.price}>{initialState.price}</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>

        <select name="size" value={size} onChange={changeInputsValues}>
          <option value={initialState.size}>{initialState.size}</option>
          <option value="Small">Pequeno</option>
          <option value="Medium">Mediano</option>
          <option value="Big">Grande</option>
        </select>
        <button onClick={resetBoton} className="clean">
          <span>
            <i>
              <FontAwesomeIcon icon={faTrash} />
            </i>
            Limpiar
          </span>
        </button>
      </div>
    </form>
  );
};

export default Filtros;

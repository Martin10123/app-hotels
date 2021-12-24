import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSadTear } from "@fortawesome/free-solid-svg-icons";

export const Error = () => {
  return (
    <div className="Error">
      <div className="div__error">
        <span className="span__icon">
          <FontAwesomeIcon icon={faTimes} className="iconError" />
          <FontAwesomeIcon icon={faSadTear} className="iconError" />
        </span>
        <h1>No se encontro ningun hotel</h1>
      </div>
    </div>
  );
};

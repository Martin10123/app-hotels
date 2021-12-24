import React from "react";
import "./Styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faBed } from "@fortawesome/free-solid-svg-icons";
import DateTime from "../../helpers/Date";

let Card = ({ infoHotel }) => {
  const AddElement = (number) => {
    let sing = { active: "", inActive: " " };
    for (let i = 0; i < number; i++) {
      sing.active += " $ ";
    }
    for (let j = 0; j < 4 - number; j++) {
      sing.inActive += " $ ";
    }
    return sing;
  };

  return (
    <article>
      <div className="inside__article">
        <figure>
          <img src={infoHotel.photo} alt={infoHotel.slug} />
        </figure>

        <h2>{infoHotel.name}</h2>
        <div className="date__reserve">
          <span>Desde {DateTime(infoHotel.availabilityFrom)}</span>
          <span>Hasta {DateTime(infoHotel.availabilityTo)}</span>
        </div>
        <div className="box__description">
          <p className="writing">{infoHotel.description}</p>
        </div>
        <div className="country">
          <span className="span__icons">
            <i>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </i>
          </span>
          <p>
            {infoHotel.city}, {infoHotel.country}
          </p>
        </div>
        <div className="rooms__zone">
          <div className="rooms">
            <span className="span__icons">
              <i>
                <FontAwesomeIcon icon={faBed} />
              </i>
            </span>
            <p>{infoHotel.rooms} Habitaciones</p>
          </div>
          <div className="sign">
            <div className="container__sing">
              <span className="color__white">
                {AddElement(infoHotel.price).active}
              </span>
              <span className="color__gray">
                {AddElement(infoHotel.price).inActive}
              </span>
            </div>
          </div>
        </div>
        <button className="reserve">
          <span>Reservar</span>
        </button>
      </div>
    </article>
  );
};

export default Card;

import React from "react";
import { Error } from "./Error";
import Card from "./Card";

export const RunCard = ({ runNewList }) => {
  return (
    <>
      {
        <main>
          {runNewList.length > 0 ? (
            runNewList.map((datosHotel) => {
              return <Card key={datosHotel.slug} infoHotel={datosHotel} />;
            })
          ) : (
            <Error />
          )}
        </main>
      }
    </>
  );
};

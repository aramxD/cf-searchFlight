import React, { useState } from "react";
import styled from "styled-components";

const CardFlight = ({ className, vuelo }) => {
  const [data, setData] = useState("");

  const itinerario = vuelo.itineraries;

  let vueloRedondo;
  let vueloIDA;
  let vueloREGRESO;
  if (itinerario.length > 1) {
    vueloRedondo = "Redondo";
    vueloIDA = itinerario[0];
    vueloREGRESO = itinerario[1];
  } else {
    vueloRedondo = "Sencillo";
    vueloIDA = itinerario[0];
  }

  console.log(vueloIDA);

  return (
    <article key={vuelo.id} className={className}>
      <p>id: {vuelo.id}</p>
      <div className="escalas">
        {vueloIDA.segments.map((escala) => {
          console.log(escala);
          return (
            <p>
              {escala.departure.iataCode} - {escala.arrival.iataCode}
            </p>
          );
        })}
        <hr />
        {vueloREGRESO?.segments.map((escala) => {
          console.log(escala);
          return (
            <p>
              {escala.departure.iataCode} - {escala.arrival.iataCode}
            </p>
          );
        })}
      </div>
      <p>Total = ${vuelo.price.grandTotal}</p>
    </article>
  );
};

export default styled(CardFlight)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  border-radius: 20px;
  box-shadow: 2px 2px 3px gray;

  .escalas {
    display: flex;
    flex-direction: column;

    p {
      margin: 5px 0;
    }
  }
  hr{
    border: 1px solid;
    width: 90%;

  }
`;

import React from "react";
import styled from "styled-components";
import vuelos from "../mocks/FlightMocs";
import CardFlight from "./CardFlight";

const FlightList = ({ className }) => {
  console.log(vuelos[0].data);

  return (
    <div className={className}>
      <p>soy el flight list</p>

      <section>



        
        {vuelos[0].data.map((vuelo) => {
          return (
            <CardFlight vuelo={vuelo} key={vuelo.id}/>
        )
        })}
      </section>
    </div>
  );
};

export default styled(FlightList)`
 
`;

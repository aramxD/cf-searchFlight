import React from "react";
import styled from "styled-components";
import vuelos from "../mocks/FlightMocs";
import CardFlight from "./CardFlight";
import { Title } from "./StyledElements";

const FlightList = ({ className }) => {
  console.log(vuelos[0].data);

  return (
    <div className={className}>
      <Title>soy el flight list</Title>

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

import React from "react";
import styled from "styled-components";
import { ButtonPrimary, Title } from "../elements/StyledElements";
 

const Main = ({className, children}) =>{
     
    return(
     
    <section className={className}>
        <Title>Soy la seccion Main xD</Title>
        <ButtonPrimary>sdfsdf</ButtonPrimary>
         {children}
    </section>
     
    );
}

export default styled(Main)`
 height:700px;
 background-color:rgba(235,235,235)

h1{
    margin:0;
}
`;

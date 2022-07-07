import React from "react";
import styled from "styled-components";
 

const Main = ({className, children}) =>{
     
    return(
     
    <section className={className}>
        <h1>Soy la seccion Main xD</h1>
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

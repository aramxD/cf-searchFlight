import React from "react";
import styled from "styled-components";
 

const Footer = ({className}) =>{
     
    return(
     
    <footer className={className}>
         <nav>
            soy el menu de footer :D
         </nav>
    </footer>
     
    );
}

export default styled(Footer)`
 height:80px;
 background-color:gray


`;


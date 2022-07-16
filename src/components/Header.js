import React from "react";
import styled from "styled-components";
 

const Header = ({className}) =>{
     
    return(
     
    <header className={className}>
         <nav>
            soy el menu de navegacion :D
         </nav>
    </header>
     
    );
}

export default styled(Header)`
 height:80px;
 background-color:gray


`;


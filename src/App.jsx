import React from 'react'
import styled from "styled-components";
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import FlightList from './elements/FlightList';
import SearchForm from './elements/SearchForm';

let github_token 

function App({className}) {
   

  return (
    <div className={className}>
       <Header/>
       {!!github_token&&
       <h1>{github_token}</h1>
       }
       
       <Main>
        <SearchForm/>

        <FlightList/>
       </Main>
       {/* <Footer/> */}
    </div>
  )
}

export default styled(App)`
 
  text-align: center;


`

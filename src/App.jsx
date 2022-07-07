import React from 'react'
import styled from "styled-components";
import Footer from './components/Footer'
import Header from './components/header'
import Main from './components/Main'
import SearchForm from './elements/SearchForm';



function App({className}) {
   

  return (
    <div className={className}>
       <Header/>
       <Main>
        <SearchForm/>


       </Main>
       <Footer/>
    </div>
  )
}

export default styled(App)`
 
  text-align: center;


`

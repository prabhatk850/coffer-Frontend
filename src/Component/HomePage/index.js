import React from 'react'
import Header from '../Header/Header';
import SideBar from "../Sidebar"
import Home from "./Home";
import styled from 'styled-components';

const Wrapper=styled.div`
width:100%;
background-color: #2F334A;
`;

function index() {
  return (
    <Wrapper>
        <Header/>
        <div style={{display:'flex'}}>
        <SideBar/>
        <Home/>
        </div>
    </Wrapper>
  )
}

export default index

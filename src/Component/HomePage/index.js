import React, { useState } from 'react'
import Header from '../Header/Header';
import SideBar from "../Sidebar"
import Home from "./Home";
import styled from 'styled-components';

const Wrapper=styled.div`
width:100%;
background-color: #2F334A;
`;



function Index() {
  const [isSidebar, setIsSidebar]=useState(false)
  const [filter, setFilter]=useState("end_year")
  return (
    <Wrapper>
        <Header isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
        <div style={{display:'flex'}}>
        <SideBar isSidebar={isSidebar} filter={filter} setFilter={setFilter}/>
        <Home filter={filter}/>
        </div>
    </Wrapper>
  )
}

export default Index

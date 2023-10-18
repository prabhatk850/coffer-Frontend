import React from 'react'
import "./App.css";
// import styled from "styled-components";
import Header from './Component/Header/Header'
import Sidebar from './Component/Sidebar/index'
import App from './App'
function Home() {
  return (
    <div>
        <Header/>
        <div style={{display:'flex'}}>
        <Sidebar/>
        <App/>
        </div>
    </div>
  )
}

export default Home

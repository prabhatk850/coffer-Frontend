import React from 'react'
import Header from '../Header/Header';
import SideBar from "../Sidebar"
import Home from "./Home";


function index() {
  return (
    <div>
        <Header/>
        <div style={{display:'flex'}}>
        <SideBar/>
        <Home/>
        </div>
    </div>
  )
}

export default index

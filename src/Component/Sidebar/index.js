import React from 'react'
import styled from 'styled-components'
import {BsFillArchiveFill} from "react-icons/bs"
import {RxDot} from "react-icons/rx"

const Wrapper=styled.div`
padding: 10px 30px ;
background-color: #2F334A;
height: 700px;
min-width: fit-content;
border: 1px solid gray;
border-top-right-radius: 15px;
border-bottom-right-radius: 15px;
margin-top: 10px;

@media (max-width: 767px) {
  display: none;
}
`;

const Dashboard =styled.div`
font-size: 20px;
color: #9CA0BB;
padding: 10px;

&:hover{
  background-color: #6B6F87;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
}
`;

const Info =styled.div`
font-size: 16px;
color: #9CA0BB;
padding: 10px;

&:hover{
  background-color: #6B6F87;
  padding: 10px;
  border-radius: 25px;
  cursor: pointer;
}
`;




function index() {
  return (
    <Wrapper>
        <Dashboard><BsFillArchiveFill style={{height:"20px",width:"20px",marginRight:"10px"}}/>Dashboard</Dashboard>
        <Info><RxDot/> End Year </Info>
        <Info><RxDot/> Topics </Info>
        <Info><RxDot/> Sector </Info>
        <Info><RxDot/> Region </Info>
        <Info><RxDot/> PEST </Info>
        <Info><RxDot/> Source </Info>
        <Info><RxDot/> SWOT </Info>
        <Info><RxDot/> Country </Info>
        <Info><RxDot/> City </Info>
    </Wrapper>
  )
}

export default index
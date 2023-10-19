import React from 'react'
import styled from 'styled-components'
import {BsFillArchiveFill} from "react-icons/bs"
import {RxDot} from "react-icons/rx"

const Wrapper=styled.div`
@media (max-width:767px) {
  position: absolute;
  margin-left: 15px;
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

const Mobile =styled.div`
padding: 10px 30px ;
background-color: #2F334A;
height: 500px;
width:fit-content;
border: 1px solid gray;
border-radius: 15px;
margin-top: 10px;
@media (min-width: 767px) {
  display: none;
 
}
`;
const Div =styled.div`
padding: 10px 30px ;
background-color: #2F334A;
height: 710px;
min-width: fit-content;
border: 1px solid gray;
border-top-right-radius: 15px;
border-bottom-right-radius: 15px;
margin-top: 10px;
@media (max-width: 767px) {
  display: none;
}
`;


 
function Index({isSidebar,setFilter}) {
  return (
    
    <Wrapper>
      <Div>
        <Dashboard><BsFillArchiveFill style={{height:"20px",width:"20px",marginRight:"10px"}}/>Dashboard</Dashboard>
        <Info onClick={(e)=>{setFilter("end_year")}}><RxDot/> End Year </Info>
        <Info onClick={(e)=>{setFilter("topic")}}><RxDot/> Topics </Info>
        <Info onClick={(e)=>{setFilter("sector")}}><RxDot/> Sector </Info>
        <Info onClick={(e)=>{setFilter("region")}}><RxDot/> Region </Info>
        <Info onClick={(e)=>{setFilter("pestle")}}><RxDot/> PEST </Info>
        <Info onClick={(e)=>{setFilter("source")}}><RxDot/> Source </Info>
        {/* <Info onClick={(e)=>{setFilter("end_year")}}><RxDot/> SWOT </Info> */}
        <Info onClick={(e)=>{setFilter("country")}}><RxDot/> Country </Info>
        {/* <Info onClick={(e)=>{setFilter("end_year")}}><RxDot/> City </Info> */}
      </Div>
      {isSidebar?

        <Mobile>
        <Dashboard>Dashboard</Dashboard>
        <Info onClick={(e)=>{setFilter("end_year")}}><RxDot/> End Year </Info>
        <Info onClick={(e)=>{setFilter("topic")}}><RxDot/> Topics </Info>
        <Info onClick={(e)=>{setFilter("sector")}}><RxDot/> Sector </Info>
        <Info onClick={(e)=>{setFilter("region")}}><RxDot/> Region </Info>
        <Info onClick={(e)=>{setFilter("pestle")}}><RxDot/> PEST </Info>
        <Info onClick={(e)=>{setFilter("source")}}><RxDot/> Source </Info>
        {/* <Info onClick={(e)=>{setFilter("end_year")}}><RxDot/> SWOT </Info> */}
        <Info onClick={(e)=>{setFilter("country")}}><RxDot/> Country </Info>
        {/* <Info onClick={(e)=>{setFilter("end_year")}}><RxDot/> City </Info> */}
        </Mobile>:""}
    </Wrapper>
  )
}

export default Index
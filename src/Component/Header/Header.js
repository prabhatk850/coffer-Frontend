import React from 'react'
import styled from 'styled-components';
import{RiMenuUnfoldLine} from 'react-icons/ri'


const Wrapper=styled.div`
height: 100px;
background-color: #2F334A;
border: 1px solid gray;
/* padding: 20px 10px 0; */
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 767px) {
  height: 80px;
  margin: 0 10px ;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  justify-content: space-between;
}
`;
const Logo=styled.img`
width: 250px;
background-color: #CFCCB5;
/* padding-left: 40%; */
filter: invert(100%);
@media (max-width: 767px) {
  width: 150px;
  /* padding-left: 23%; */
}
`;
const Icon=styled.div`
@media (min-width:767px){
  display: none;
}
`;

function Header({isSidebar,setIsSidebar}) {

  const handleSidebar=()=>{
    setIsSidebar(!isSidebar)
    
    }
  return (
    <Wrapper>
      <Icon><RiMenuUnfoldLine onClick={()=>{handleSidebar()}} style={{width:"25px",height:"25px",color:"white",paddingLeft:"10px"}} /></Icon>
      <Logo src='./Black.png' alt='BlackCoffer' ></Logo>
      <Icon/>
    </Wrapper>
  )
}

export default Header
import React from 'react'
import styled from 'styled-components';

const Wrapper=styled.div`
background-color: #2F334A;
height: 100px;

border: 1px solid gray;
padding: 10px;
@media (max-width: 767px) {
  height: 80px;
  margin: 0 10px ;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
`;
const Logo=styled.img`
width: 250px;
padding-top: 20px;
padding-left: 40%;
filter: invert(100%);
@media (max-width: 767px) {
  width: 150px;
  padding-left: 30%;
}
`;
function Header() {
  return (
    <Wrapper>
        <Logo src='./Black.png' alt='BlackCoffer' ></Logo>
    </Wrapper>
  )
}

export default Header
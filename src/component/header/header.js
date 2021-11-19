import React from "react";
import styled from "styled-components";

import icon from "./icon.png";

const Main = styled.div`
  font-family: 'Brush Script MT', cursive;
  align-items: center;
  background-color: #FFFCFA;
  color: #2F3240;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  
  & * {
    margin-bottom: 20px;
    
  }
`;

const Title = styled.h1`
  font-size: 65px;
`;

const Logo = styled.img`
  max-width: 120px;
  margin-right: -10px;
`;

function Header () {
  return(
    <Main>
      <Logo src={icon}/>
      <Title>Popcorn Time</Title>
      <Logo src={icon}/>
    </Main>
  );
}

export default Header;
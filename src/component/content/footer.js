import React from "react";
import styled from "styled-components";

const Main = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 16px;
  background-color: #FFF4EB;
  padding: 10px 0px;
  margin-top: 10px;
`;

const Text = styled.p`
  font-size: 12px;
  text-align: center;
`;

function Footer() {
  return (
    <Main>
      <Text>Website by leoni♡</Text>
    </Main>
  );
}

export default Footer;